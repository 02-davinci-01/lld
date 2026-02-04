# Factory Method Pattern

## Core Intent
**Enforce a fixed workflow while allowing subclasses to decide which concrete object participates in that workflow.**

Factory Method is not about object creation alone — it is about **controlling behavior**.

---

## When to Use
- You have a **common algorithm / workflow**
- One step of that workflow needs to vary
- You want to **enforce invariants** (logging, retries, validation, metrics, order)
- You do NOT want clients to assemble objects

---

## Key Characteristics
- One main product
- Object creation is **hidden inside the workflow**
- Client calls **one method**
- Subclasses customize *only creation*, not behavior

---

## Structure
- **Product Interface** – defines capabilities
- **Concrete Products** – actual implementations
- **Creator (abstract class)** – owns workflow
- **Factory Method** – deferred creation step

---

## Mental Model
> “This is HOW things happen.  
> You only decide WHAT concrete object is used.”

Factory Method = **Template Method + late-bound creation**

---

## Minimal Example (TypeScript)
```ts
interface Notification {
  send(): void;
}

abstract class NotificationCreator {
  protected abstract createNotification(): Notification;

  sendNotification() {
    this.log();
    const n = this.createNotification();
    n.send();
  }

  private log() {
    console.log("logging...");
  }
}
```

---

## What Problem It Solves
- Prevents duplicated logic
- Guarantees workflow order
- Centralizes cross-cutting concerns
- Removes conditional logic (`if/else`)

---

## When NOT to Use
- No shared workflow
- Just calling a method on an interface
- No invariants to protect

In that case → **just use interfaces + DI**.

---

## One-Line Interview Definition
> Factory Method enforces a stable workflow while allowing subclasses to decide which concrete object participates.
