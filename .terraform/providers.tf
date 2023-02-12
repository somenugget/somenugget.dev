terraform {
  required_version = "~> 1.3"

  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.54"
    }
  }

  backend "s3" {
    bucket = "somenugget.dev-terraform"
    key = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}

provider "aws" {
  region = "eu-west-1"
}

provider "aws" {
  alias = "acm_provider"
  region = "us-east-1"
}
