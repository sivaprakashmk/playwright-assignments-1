import  test, {chromium, firefox} from '@playwright/test';

test('Red Bus in Edge', async () => {
  // Launch Edge (Chromium-based)
  const browser = await chromium.launch({channel:'msedge',headless:false})
  const edgeContext = await browser.newContext();
  const edgePage = await edgeContext.newPage();

  // Load Red Bus
  await edgePage.goto('https://www.redbus.in');
  await edgePage.waitForTimeout(3000)
  console.log("Red Bus (Edge) Title:", await edgePage.title());
  console.log("Red Bus (Edge) URL:", edgePage.url());

  await browser.close();
});

test('Flipkart in Firefox', async () => {
  // Launch Firefox
 // const browser1 = await firefox.launch({headless:false})
  const browser1 = await chromium.launch({channel:'msedge',headless:false})
  const firefoxContext = await browser1.newContext();
  const firefoxPage = await firefoxContext.newPage();

  // Load Flipkart
  await firefoxPage.goto('https://www.flipkart.com');
  await firefoxPage.waitForTimeout(3000)
  console.log("Flipkart (Firefox) Title:", await firefoxPage.title());
  console.log("Flipkart (Firefox) URL:", firefoxPage.url());

  await browser1.close();
});
