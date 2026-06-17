#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if [ "$#" -lt 0 ]; then
  echo "Usage: $0 [terraform-variable-file]"
  exit 1
fi

TFVARS_FILE="${1:-terraform.tfvars}"

cd terraform
echo "Running terraform init in $(pwd)"
terraform init

if [ -f "$TFVARS_FILE" ]; then
  echo "Running terraform destroy with variable file: $TFVARS_FILE"
  terraform destroy -auto-approve -var-file="$TFVARS_FILE"
else
  echo "Running terraform destroy without variable file"
  terraform destroy -auto-approve
fi

echo "Terraform destroy completed. All managed resources have been destroyed."
