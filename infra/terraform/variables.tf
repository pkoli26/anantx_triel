variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

variable "key_name" {
  type        = string
  description = "The name of the existing or managed EC2 key pair."
  default     = "anant"
}

variable "public_key_path" {
  type        = string
  description = "Local path to the public SSH key file to upload to AWS key pair (not the private .pem file)."
  # Windows example:
  # default = "C:\\Users\\your-username\\.ssh\\id_rsa.pub"
  # Ubuntu/Linux example:
  # default = "/home/your-username/.ssh/id_rsa.pub"
  default     = ""
}

variable "ami_id" {
  type        = string
  description = "Optional EC2 AMI ID to use. Leave blank to use the latest Amazon Linux 2023 AMI."
  default     = "ami-0e38835daf6b8a2b9"
}
*.pem
terraform.tfvars
terraform.tfstate*
.env
.DS_Store
*.tfvars.json*.pem
terraform.tfvars
terraform.tfstate*
.env
.DS_Store
*.tfvars.json*.pem
terraform.tfvars
terraform.tfstate*
.env
.DS_Store
*.tfvars.json*.pem
terraform.tfvars
terraform.tfstate*
.env
.DS_Store
*.tfvars.json
variable "create_key_pair" {
  type        = bool
  description = "Whether Terraform should import/create the SSH key pair in AWS. Set false to use an existing key pair name."
  default     = false
}

variable "name_prefix" {
  type    = string
  default = "anantx"
}

variable "github_repo" {
  type    = string
  default = "https://github.com/pkoli26/anantx_triel.git"
}
