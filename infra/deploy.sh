#!/usr/bin/env bash
set -xeuo pipefail
cd "$(dirname "$0")"

echo "Running deploy from $(pwd)"

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <private-key-path> [terraform-variable-file]"
  exit 1
fi

PRIVATE_KEY_FILE="$1"
TFVARS_FILE="${2:-terraform.tfvars}"

cd terraform
echo "Running terraform init in $(pwd)"
terraform init

if [ -f "$TFVARS_FILE" ]; then
  echo "Running terraform apply with variable file: $TFVARS_FILE"
  terraform apply -auto-approve -var-file="$TFVARS_FILE"
else
  echo "Running terraform apply without variable file"
  terraform apply -auto-approve
fi

PUBLIC_IP=$(terraform output -raw public_ip)
cd ..

# Ansible deployment is currently disabled while we verify Terraform only.
# inventory.ini is still generated for future Ansible runs.
cat > inventory.ini <<EOF
[aws]
${PUBLIC_IP} ansible_user=ec2-user ansible_private_key_file=${PRIVATE_KEY_FILE}
EOF

#ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i inventory.ini playbook.yml
echo "Terraform completed. Instance public IP: ${PUBLIC_IP}"
