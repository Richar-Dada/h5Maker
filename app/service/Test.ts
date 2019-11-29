import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  public async test(): Promise<PageItem> {
    const result = await this.app.mysql.get('page', { id: 1 })
    return result
  }
}

export interface PageItem {
  id: number,
  name: string,
  url: string
}
