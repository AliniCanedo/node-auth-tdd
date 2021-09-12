const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Alini',
      email: 'alini@gmail.com',
      password: '12312313',
    });

    const compareHash = await bcrypt.compare('12312313', user.password_hash);

    expect(compareHash).toBe(true);
  });
});
