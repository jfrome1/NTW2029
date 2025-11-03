const CURRENT_VERSION_KEY = 'app_version';
const VERSION_CHECK_URL = '/api/version';

async function checkPageVersion() {
    if (window.isCheckingVersion) {
        return;
    }
    window.isCheckingVersion = true;

    try {
        const response = await fetch(VERSION_CHECK_URL, {
            cache: 'no-store' 
        });

        if (!response.ok) {
            console.warn('Could not fetch latest version. Skipping check.');
            return;
        }

        const data = await response.json();
        const latestVersion = data.version;

        const storedVersion = localStorage.getItem(CURRENT_VERSION_KEY);

        if (!storedVersion) {
            localStorage.setItem(CURRENT_VERSION_KEY, latestVersion);
            return;
        }

        if (storedVersion !== latestVersion) {
            console.log(`Content updated. Old version: ${storedVersion}, New version: ${latestVersion}. Forcing reload.`);
            localStorage.setItem(CURRENT_VERSION_KEY, latestVersion);
            setTimeout(() => {
                window.location.reload(true);
            }, 50);

        }

    } catch (error) {
        console.error('Error during version check:', error);
    } finally {
        window.isCheckingVersion = false;
    }
}

checkPageVersion();

window.addEventListener('focus', checkPageVersion);