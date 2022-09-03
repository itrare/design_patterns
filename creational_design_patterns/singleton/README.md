
## Singleton Pattern

Singleton pattern esure that a class has only one instance while providing a global access point to this instance.

Few points to note:
- This pattern voilates "Single Responsibility Principle".
- Default constructor should be private to prevent other objects from using new operator with the Singleton class.
- Need special care in multithreaded environment.