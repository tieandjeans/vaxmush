# ~/.bashrc - Starter configuration for students

# Add the students' custom directory to the PATH
export PATH="$HOME/students/:$PATH"  #tried /studentbin

# Set a colorful, informative prompt: username@hostname: current_directory $
RESET='\[\e[0m\]'       # Reset color
CYAN='\[\e[36m\]'       # Cyan color for the prompt symbol $

# Set PS1 (Prompt String 1) to display the desired prompt style
PS1='\u@\h: \w '"$CYAN"'$\[\e[0m\] '

# Alias the system help command to syshelp
alias syshelp='help'

# Define a function for the custom 'help' command
help() {
    echo "Read UP from this sentence to see the available VAXMUSH commands."
    ls /studentbin
}

# Export the function so it can be used in the shell
export -f help

# Aliases for a beginner-friendly command line experience
alias ls='ls --color=auto'
alias ll='ls -alF'
alias la='ls -A'
alias python='python3'
alias edit='micro'

# Safety settings: Prevent overwriting files without warning
alias cp='cp -i'
alias mv='mv -i'
alias rm='rm -i'

# Set a welcoming message


# Set a welcoming message
echo -e "Hey IBCS!  Welcome to the first public alpha showing of VAXMUSH.\n
#############################################################################\n
# TODAY:	You need to:\n
#					Create a ~/hw directory	\n
#					Write answer the WODB Slide using 'micro'\n
#					Save that response as ~/hw/first.txt\n
#																\n
#############################################################################\n

"
# End of .bashrc

