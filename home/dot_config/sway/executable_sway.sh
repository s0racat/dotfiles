#!/bin/sh

export GTK_IM_MODULE=fcitx \
    QT_IM_MODULE=fcitx \
    XMODIFIERS=@im=fcitx \
    QT_QPA_PLATFORMTHEME=qt5ct \
    QT_AUTO_SCREEN_SCALE_FACTOR=0 \
    MOZ_ENABLE_WAYLAND=1 \
    MOZ_DBUS_REMOTE=1 \
    SSH_AUTH_SOCK=$XDG_RUNTIME_DIR/gcr/ssh \
    XDG_CURRENT_DESKTOP=sway \
    _JAVA_AWT_WM_NONREPARENTING=1 \
    QT_QPA_PLATFORM=wayland \
    GTK_THEME=Nordic-bluish-accent

# if test -z "$DBUS_SESSION_BUS_ADDRESS" ; then
# 	eval `dbus-launch --sh-syntax --exit-with-session`
# 	echo "D-Bus per-session daemon address is: $DBUS_SESSION_BUS_ADDRESS"
# fi
if [[ $(hostname) == "13-an0xxx" ]] ; then
	export LIBVA_DRIVER_NAME=iHD
elif [[ $(hostname) == "um690pro" ]]; then
	export LIBVA_DRIVER_NAME=radeonsi
	export VDPAU_DRIVER=radeonsi
fi

exec sway
