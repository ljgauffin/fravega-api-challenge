import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UsersService {
  private readonly githubApiUrl = 'https://api.github.com/users';

  async fetchUsers() {
    try {
      const response = await axios.get(this.githubApiUrl);
      return response.data.map((user) => ({
        login: user.login,
        avatar_url: user.avatar_url,
        url: user.html_url,
      }));
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }
}
