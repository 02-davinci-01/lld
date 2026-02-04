# Singleton Pattern (TypeScript)

## Intent
Ensure only one instance of a class exists and provide a global access point to it.

---

## Core Concepts
- **static** → shared across all instances of a class
- **private constructor** → prevents external instantiation
- **readonly** → prevents reassignment of the singleton reference
- **ES Modules** → executed once and cached

---

## Variants

### 1. Eager Singleton
- Instance created at **class load time**
- Simple but inflexible

```ts
private static readonly instance = new Singleton();
```

---

### 2. Lazy Singleton
- Instance created on **first access**
- Useful for expensive or optional objects

```ts
private static instance: Singleton | null = null;

static getInstance() {
  if (this.instance === null) {
    this.instance = new Singleton();
  }
  return this.instance;
}
```

---

### 3. Static Block Singleton
- Eager initialization using a `static {}` block
- Allows complex setup logic (logging, validation, try/catch)

```ts
static {
  this.instance = new Singleton();
}
```

---

### 4. Module Singleton (Preferred in TypeScript)
- Relies on ES module caching
- No singleton boilerplate required

```ts
const logger = new Logger();
export default logger;
```

---

### 5. Dependency Injection (DI) Singleton
- Lifecycle managed by a framework or container
- Common in NestJS / Angular
- Best for large applications

---

### 6. Thread-Safe Singleton (Theoretical)
- Uses locks to prevent concurrent creation
- Required in multi-threaded languages (Java, C++)
- **Not applicable in JavaScript**

---

### 7. Double-Checked Locking Singleton (Theoretical)
- Optimizes lock usage by avoiding locks after initialization
- Complex and error-prone
- **Not applicable in JavaScript**

---

## TypeScript Reality
- JavaScript is single-threaded
- No shared-memory concurrency
- Module and DI singletons are preferred

---

## Interview Summary
> In TypeScript, module singletons and DI-managed singletons are preferred; most classic singleton variants exist to handle multi-threaded runtimes.
