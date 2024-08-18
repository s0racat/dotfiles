

SYSTEMD_UNITS=(
	"dnscrypt-proxy.service"
	"avahi-daemon.service"
	"bluetooth"

	"cups"

	"docker"

	"firewalld"
	"rc-local"

	"tailscaled"

	"thermald"

	"tlp"

	"libvirtd.socket"

	"usbguard"

	"root-resume"
)


for unit in "${SYSTEMD_UNITS[@]}"; do
	echo "Enabling $unit..."
	doas systemctl enable "$unit"
done

