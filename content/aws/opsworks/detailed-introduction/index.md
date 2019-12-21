---
title: Opsworks detailed introduction - AWS
---
# AWS Opsworks - Detailed Introduction
## Opsworks inner workings
- Ruby interpreter is located at `/opt/aws/opsworks/local/bin/ruby`
  Other executables are present at `/opt/aws/opsworks/current` like `opsworks-agent`, `opsworks-agent-cli` etc
- When setup is run again `aws_opsworks_users::default` recipe is run, which includes the following actions:
  - kill all processes of users
  - remove user (-r) options, which clears its home directory
- When creating `user` using `chef`, following things we need to be careful about
  - The application that we deploy as a user should be in directory other than its home directory because if some process executes `userdel -r <username>` all our files will be lost, especially persistent storage
  - We need to be careful about `manage_home` being set to `true` because of following line of command:
    `/opt/aws/opsworks/current/vendor/bundle/ruby/<ruby_version>/gems/chef-<chef_version>/spec/support/shared/unit/provider/useradd_based_user_provider.rb:    it "should run userdel with the new resources user name and -r if manage_home is true" do`
- Logs for each run is stored in `/var/chef/runs`,
  available at `https://console.aws.amazon.com/opsworks/home?region=<region_name>#/stack/<stack_id>/instances/<instance_id>/log/<run_id>`
  (Here, run id is obtained from `/var/chef/runs`)
