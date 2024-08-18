#!/usr/bin/env sh
picom -b
#imwheel
gammastep -m randr &
pcmanfm-qt -d &
fcitx5 &
/usr/lib/kdeconnectd &
keepassxc &
/usr/bin/lxqt-policykit-agent &
dunst &
clipcatd &
xss-lock --transfer-sleep-lock ~/.config/i3/transfer-sleep-lock-i3lock.sh &
pasystray &
nm-applet &
# caffeine &
blueman-applet &
wezterm-mux-server --daemonize
