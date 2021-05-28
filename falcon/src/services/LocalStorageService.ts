
export class LocalStorageService {
  public static getValue(key: string): any {
    const i = localStorage.getItem(key);
    if (!i) {
      return undefined;
    }
    try {
      return JSON.parse(i);
    } catch {
      return undefined;
    }
  }

  public static saveValue(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}