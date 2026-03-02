const http = require('http');

const postData = (path, data) => {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          resolve(body);
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.write(payload);
    req.end();
  });
};

async function test() {
  try {
    const email = `test_verification_${Date.now()}@example.com`;
    console.log('--- Testing Registration ---');
    const regRes = await postData('/api/auth/register', {
      name: 'Verification User',
      email: email,
      password: 'password123'
    });
    console.log('Registration Response:', regRes);

    console.log('\n--- Testing Login ---');
    const loginRes = await postData('/api/auth/login', {
      email: email,
      password: 'password123'
    });
    console.log('Login Response:', loginRes);

    if (loginRes.accessToken && loginRes.refreshToken) {
      console.log('\n--- Testing Profile ---');
      const profileOptions = {
        hostname: 'localhost',
        port: 5000,
        path: '/api/auth/profile',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${loginRes.accessToken}`
        }
      };
      const profileRes = await new Promise((resolve) => {
        http.get(profileOptions, (res) => {
          let body = '';
          res.on('data', (chunk) => body += chunk);
          res.on('end', () => resolve(JSON.parse(body)));
        });
      });
      console.log('Profile Response:', profileRes);

      console.log('\n--- Testing Refresh Token ---');
      const refreshRes = await postData('/api/auth/refresh', {
        token: loginRes.refreshToken
      });
      console.log('Refresh Response:', refreshRes);

      if (refreshRes.accessToken) {
        console.log('\nVerification Successful: Advanced JWT flow (Access/Refresh/Profile) works.');
      } else {
        console.log('\nVerification Failed: Could not refresh token.');
      }
    } else {
      console.log('\nVerification Failed: No tokens in login response.');
    }
  } catch (err) {
    console.error('Test Failed:', err);
  }
}

test();
