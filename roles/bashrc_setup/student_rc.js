##
## Slightly nicer .bashrc
## Makes pretty colors and stuff
##

## Set $PATH, which tells the computer where to search for commands
export PATH="$PATH:/studentbin"

## Where to search for manual pages
export MANPATH="/usr/share/man:/usr/local/man:/usr/local/local_dfs/man"

## Which pager to use.
export PAGER=less

## Choose your weapon
#EDITOR=/usr/bin/vim
#EDITOR=/usr/bin/emacs
EDITOR=/usr/bin/nano
export EDITOR

## The maximum number of lines in your history file
export HISTFILESIZE=50

## Org Tag
export ORGANIZATION="VAXMUSH, ASBarcelona 2024"

## Enables displaying colors in the terminal
export TERM=xterm-color


## Disable automatic mail checking
unset MAILCHECK 

## If this is an interactive console, disable messaging
#tty -s && mesg n

## Aliases from 'ol EMBA tcsh
alias bye=logout
alias h=history
#alias jobs='jobs -l'
#alias lf='ls -algF'
#alias log=logout
alias cls=clear
alias edit=$EDITOR
#alias restore=/usr/local/local_dfs/bin/restore

## Automatically correct mistyped 'cd' directories
#shopt -s cdspell

## Append to history file; do not overwrite
shopt -s histappend

## Prevent accidental overwrites when using IO redirection
set -o noclobber



# .bashrc snippet for automatic tmux session creation

# Check if we are not already inside a tmux session
if [ -z "$TMUX" ]; then
    # Generate a unique session name using the username and current SSH connection
    SESSION_NAME="${USER}_$(date +%Y%m%d_%H%M%S)"

    # Start a new tmux session named with the generated session name
    tmux new-session -s "$SESSION_NAME"
fi

