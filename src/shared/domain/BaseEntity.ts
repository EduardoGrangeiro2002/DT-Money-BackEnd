export abstract class BaseUser {
  protected abstract validate(): Error | undefined;
}
