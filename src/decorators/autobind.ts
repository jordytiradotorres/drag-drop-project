export function Autobind(_: any, _2: string, description: PropertyDescriptor) {
  const originalMethod = description.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,

    get() {
      return originalMethod.bind(this)
    }
  }
  return adjDescriptor
}
