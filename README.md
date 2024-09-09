### VAXMUSH  - A Computer Lab for CS


This is an ansible playbook designed to deploy a simpified and safe-ish collaborative classroom environment on a virtualized Ubuntu system.  


### Functioning
Ansible playbook with roles
create user accounts
 - modify home dir to /home/students/*
distribute bashrc


### Implement, but not working
Permission scoping for teacher accounts (ACL)


### Bash Scripts TODO

## Class Routines

handout.sh

handout <source_path> <dest_rel_path>
  - a bash script that puts a FULL COPY of source into dest.  Assumiong going to /home/students/*/target, so could make rel_path to student_username

share.sh
share <source_path> <target_path>
- make a symlink to source in at target, normally in every student dir

# This suite of scripts need to append some announcement part of motd, so that my changes are announced to kids.

collect.sh

collect <target rel_path | keyword > <output_path> 
 - pipe all files at target_rel_path (assuming things in /home/student/name/hw/fileame) into a new document at output_path

& Will need a record of this in some class.log file. and will need statline/header info for each answer.

check.sh (or porbably .py)
- some equivalent thing for "run all of target file against tests"

 

## Support

mutli_display.sh
 - uses tmux to make a display of all currently logged in shell sessions.  I think I hav e tmux installed and initalized for all student accounts, which is one of the precursor steps.  

peek.sh
peek ≤login_name>  
- parse who and then use tmux to monitor (no control) shell session of user.  This assumes that the base tmux command uses shell_id to identify




