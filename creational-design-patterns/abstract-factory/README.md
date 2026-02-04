# Abstract Factory Pattern

## Core Intent
**Create families of related objects while guaranteeing their compatibility.**

Abstract Factory is about **structural consistency**, not workflow control.

---

## When to Use
- You need **multiple related objects**
- Objects must be **compatible with each other**
- You want to swap entire configurations (OS, theme, environment)
- The client assembles objects

---

## Key Characteristics
- Multiple products per factory
- Object creation is **exposed to the client**
- Client builds the system
- Factory represents a **configuration boundary**

---

## Structure
- **Product Interfaces** – Button, Bar, etc.
- **Concrete Products** – WindowsButton, MacButton
- **Abstract Factory** – declares multiple factory methods
- **Concrete Factories** – create compatible families

---

## Mental Model
> “If you choose this factory, everything you get from it will belong together.”

Abstract Factory = **factory of product families**

---

## Minimal Example (TypeScript)
```ts
interface GUIFactory {
  createButton(): Button;
  createBar(): Bar;
}

class WindowsFactory implements GUIFactory {
  createButton() { return new WindowsButton(); }
  createBar() { return new WindowsBar(); }
}
```

---

## What Problem It Solves
- Prevents invalid object combinations
- Centralizes system configuration
- Makes family swaps trivial
- Improves scalability of UI / platform code

---

## Factory Method vs Abstract Factory

| Aspect | Factory Method | Abstract Factory |
|------|---------------|------------------|
| Focus | Workflow | Structure |
| Products | Single | Multiple |
| Client assembles objects | ❌ | ✅ |
| Compatibility guarantee | ❌ | ✅ |
| Creation visibility | Hidden | Exposed |

---

## One-Line Interview Definition
> Abstract Factory provides an interface for creating families of related objects without specifying their concrete classes.
