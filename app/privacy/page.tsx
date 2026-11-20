import Link from "next/link";

export default function PrivacyPage() {
    return (
        <>
            <h1>Privacy Policy</h1>
            <p className={"text-neutral-500"}>Effective Date: November 20, 2026</p>
            <p>
                GrindGuide respects your privacy. This Privacy Policy explains what
                information the GrindGuide mobile application collects, how it is used,
                and your choices regarding that information.
            </p>
            <h2>Information We Collect</h2>
            <p>
                When you use GrindGuide, we request access to your device’s precise or
                approximate location (via GPS, Wi-Fi, or cellular network) to show
                coffee shops near you on the map and calculate distances. We may collect
                non-personal technical information, such as your device model, operating
                system version, app version, and crash logs, to diagnose bugs and keep
                the app running reliably. GrindGuide does not require you to create an
                account or provide your name, email address, or phone number to search
                for nearby coffee shops.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
                We use the information described above strictly to, display nearby
                coffee shops relative to your current location, provide map views,
                distances, and basic shop details, and monitor app stability, fix
                crashes, and improve performance.
            </p>
            <p>
                We do not sell your location data, track your movements in the
                background when the app is closed, or share your location with data
                brokers or third-party advertisers.
            </p>
            <h2>Third-Party Services</h2>
            <p>
                We use BugSnag to collect anonymous crash reports and basic usage
                analytics.
            </p>
            <h2>Data Retention and Security</h2>
            <p>
                All communication between GrindGuide and our mapping or data providers
                is encrypted using industry-standard HTTPS/TLS protocols. Because we do
                not maintain user accounts or store personal location histories, we
                retain minimal technical diagnostic data only for as long as necessary
                to resolve bugs and maintain app security.
            </p>
            <h2>Your Choices and Controls</h2>
            <p>
                You control whether GrindGuide can access your location. You can enable,
                disable, or limit location permissions (such as switching between
                &quot;Precise&quot; and &quot;Approximate&quot; location) at any time in
                your iOS or Android device settings. If you disable location access,
                GrindGuide will not be able to center the map on your position
                automatically, though you may still manually browse the map.
            </p>
            <h2>Children’s Privacy</h2>
            <p>
                GrindGuide is not directed to children under the age of 13, and we do
                not knowingly collect personal information from children.
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
                We may update this Privacy Policy from time to time as we add new
                features or as legal requirements change. Any updates will be posted
                here with a revised effective date.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have questions about this Privacy Policy or how GrindGuide
                handles data, contact us at{" "}
                <Link href={"mailto:topher@bessaapps.com"}>topher@bessaapps.com</Link>.
            </p>
        </>
    );
}
