#!/usr/bin/env sh
nm-applet &
/usr/bin/lxqt-policykit-agent &
mako &
wlsunset -o eDP-1 -t 3500 -g 0.96 -S 0:00 -s 0:00 &
pcmanfm-qt -d &
fcitx5 &
/usr/lib/kdeconnectd &
keepassxc &
blueman-applet &
wezterm-mux-server --daemonize &
wl-paste --watch cliphist store &
