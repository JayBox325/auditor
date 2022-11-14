import lighthouse from 'lighthouse'
import chromeLauncher from 'chrome-launcher'
import desktopConfig from 'lighthouse/lighthouse-core/config/lr-desktop-config.js'

/**
 * @param  {url} url
 * @return {object} - the lighthouse results
 *
 * Accept an url, and use chrome to run a Lighthouse against the given url
 * using a slightly modified desktop config. With this config, we account
 * for very slow pages, to make it possible to check a url against the
 * Web Archive.
 */

async function runLighthouse(url) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })
    const options = { output: 'json', port: chrome.port, onlyCategories: ['performance'] }

    const runnerResult = await lighthouse(url, options, desktopConfig)

    await chrome.kill()
    return runnerResult
}

export default runLighthouse