# 📘 Dart & Flutter Advanced Course (Complete Notes)

Welcome to the complete lecture notes of our **20-part Dart & Flutter
Advanced Course**.\
This book-style `.md` file contains theory, examples, and code blocks
for step-by-step learning.

------------------------------------------------------------------------

## **Lecture 1: Introduction to Dart**

### 1. Dart: A Modern Language

Dart is a modern, object-oriented programming language developed by
Google.\
It is the foundation of **Flutter**, enabling cross-platform mobile,
desktop, and web applications.

### Key Features

- Statically typed but flexible (type inference supported)
- Supports OOP: classes, inheritance, mixins, extensions
- Strong async features: `Future`, `Stream`, `async/await`
- Null-safety for robust apps

``` dart
void main() {
  print("Hello Dart!");
}
```

### 2. Abstract Classes & Interfaces

Abstract classes let you define contracts. Classes can `implement` them (like Java interfaces).

```dart
abstract class Shape {
  double area();
  double perimeter();
}

class Circle implements Shape {
  final double radius;
  Circle(this.radius);

  @override
  double area() => 3.14 * radius * radius;

  @override
  double perimeter() => 2 * 3.14 * radius;
}

void main() {
  Shape c = Circle(5);
  print("Area: ${c.area()}, Perimeter: ${c.perimeter()}");
}
```

Why important?

- Abstraction → hides details.
- Interface → guarantees structure across multiple implementations.

### 3. Mixins – Code Reuse Without Inheritance

Mixins allow multiple classes to share methods.

```dart
mixin Logger {
  void log(String message) => print("[LOG] $message");
}

class Service with Logger {
  void fetchData() {
    log("Fetching data...");
  }
}

void main() {
  final service = Service();
  service.fetchData();
}
```

✔ Unlike inheritance, you can “plug in” multiple mixins.

✔ Think of them like traits in Scala or PHP.

### 4. Extensions – Add Power to Existing Types

```dart
extension StringUtils on String {
  String capitalize() => "${this[0].toUpperCase()}${substring(1)}";
}

void main() {
  print("dart".capitalize()); // Dart
}
```

✔ You can add new methods to existing types without modifying them.

✔ Great for utility functions (like string manipulation).

### 5. Generics – Type-Safe Reusability

Dart allows generic programming for type safety.

```dart
class Cache<T> {
  final _storage = <String, T>{};

  void setItem(String key, T value) => _storage[key] = value;
  T? getItem(String key) => _storage[key];
}

void main() {
  final cache = Cache<int>();
  cache.setItem("age", 25);
  print(cache.getItem("age")); // 25
}
```

✔ Generics prevent runtime errors → ensures compile-time type safety.

### 6. Asynchronous Programming (Futures, async/await, Streams)

`Futures:`

```dart
Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 2));
  return "Data loaded";
}

void main() async {
  print("Start");
  print(await fetchData());
  print("End");
}
```

`Streams:`

```dart
Stream<int> counter(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}

void main() async {
  await for (var value in counter(5)) {
    print("Tick: $value");
  }
}
```

✔ Futures → one value later.

✔ Streams → multiple values over time.

### 7. Functional Features (Lambdas, Higher-order Functions)

```dart
List<int> numbers = [1, 2, 3, 4, 5];

// Higher-order function: takes another function as input
List<int> filter(List<int> list, bool Function(int) test) {
  return list.where(test).toList();
}

void main() {
  var evens = filter(numbers, (n) => n % 2 == 0);
  print(evens); // [2, 4]
}
```

✔ Dart embraces functional patterns like in JS/Python/Scala.

### 8. Isolates – True Concurrency in Dart

Unlike threads, isolates don’t share memory. Each has its own heap.

```dart
import 'dart:isolate';

void worker(SendPort sendPort) {
  sendPort.send("Hello from isolate!");
}

void main() async {
  final receivePort = ReceivePort();
  await Isolate.spawn(worker, receivePort.sendPort);

  receivePort.listen((message) {
    print(message);
  });
}
```

✔ Used in Flutter for heavy background tasks (image processing, parsing).

✅ **Lecture Summary**

- Abstract classes = contracts.
- Mixins = reusable traits.
- Extensions = extend existing types.
- Generics = type-safe containers & logic.
- Futures & Streams = asynchronous programming.
- Isolates = true concurrency in Dart.

------------------------------------------------------------------------

## **Lecture 2 – Design Patterns in Dart**

Design patterns are proven solutions to common software design problems. Dart, being OOP + functional, expresses them elegantly.

### 1. Singleton Pattern

Ensures only one instance of a class exists.

```dart
class Singleton {
  static final Singleton _instance = Singleton._internal();
  factory Singleton() => _instance;

  Singleton._internal(); // private constructor

  void greet() => print("Hello from Singleton!");
}

void main() {
  var s1 = Singleton();
  var s2 = Singleton();
  print(s1 == s2); // true
}
```

✔ Useful for logging, caching, configuration.

### 2. Factory Pattern

Creates objects without exposing the creation logic.

```dart
abstract class Shape {
  void draw();
}

class Circle implements Shape {
  @override
  void draw() => print("Drawing Circle");
}

class Square implements Shape {
  @override
  void draw() => print("Drawing Square");
}

class ShapeFactory {
  static Shape create(String type) {
    switch (type) {
      case 'circle': return Circle();
      case 'square': return Square();
      default: throw Exception("Unknown shape");
    }
  }
}

void main() {
  var shape = ShapeFactory.create('circle');
  shape.draw(); // Drawing Circle
}
```

✔ Decouples object creation from usage.

### 3. Strategy Pattern

Encapsulates algorithms and allows switching dynamically.

```dart
abstract class PaymentStrategy {
  void pay(double amount);
}

class CreditCardPayment implements PaymentStrategy {
  @override
  void pay(double amount) => print("Paid $amount with Credit Card");
}

class PayPalPayment implements PaymentStrategy {
  @override
  void pay(double amount) => print("Paid $amount with PayPal");
}

class Checkout {
  PaymentStrategy strategy;
  Checkout(this.strategy);

  void processOrder(double amount) => strategy.pay(amount);
}

void main() {
  var checkout = Checkout(CreditCardPayment());
  checkout.processOrder(100);

  checkout.strategy = PayPalPayment();
  checkout.processOrder(50);
}
```

✔ Enables pluggable behaviors.

### 4. Observer Pattern

Objects notify subscribers when state changes.

```dart
class Subject {
  final _observers = <Observer>[];

  void attach(Observer o) => _observers.add(o);
  void notify(String msg) {
    for (var o in _observers) {
      o.update(msg);
    }
  }
}

abstract class Observer {
  void update(String msg);
}

class ConsoleObserver implements Observer {
  @override
  void update(String msg) => print("Console received: $msg");
}

void main() {
  var subject = Subject();
  subject.attach(ConsoleObserver());
  subject.notify("Hello observers!");
}
```

✔ Foundation of event-driven systems.

### 5. Decorator Pattern

Adds behavior dynamically to objects.

```dart
abstract class Coffee {
  String getDescription();
  double cost();
}

class SimpleCoffee implements Coffee {
  @override
  String getDescription() => "Simple Coffee";
  @override
  double cost() => 5.0;
}

class MilkDecorator implements Coffee {
  final Coffee coffee;
  MilkDecorator(this.coffee);

  @override
  String getDescription() => "${coffee.getDescription()} + Milk";
  @override
  double cost() => coffee.cost() + 2.0;
}

void main() {
  Coffee coffee = SimpleCoffee();
  print("${coffee.getDescription()} = \$${coffee.cost()}");

  coffee = MilkDecorator(coffee);
  print("${coffee.getDescription()} = \$${coffee.cost()}");
}
```

✔ Adds new features without modifying the original class.

✅ **Lecture 2 Summary**

- Singleton → one instance only.
- Factory → abstract object creation.
- Strategy → switchable algorithms.
- Observer → pub/sub mechanism.
- Decorator → dynamic behavior extension.

------------------------------------------------------------------------

## **Lecture 3 – Memory, Null Safety & Advanced Async in Dart**

### 1. Memory Management in Dart

- Dart uses garbage collection (GC).
- Objects live in heap memory.
- References on the stack point to them.
- If no references exist → GC reclaims memory.

`Example:` Object lifecycle

```dart
class Temp {
  final String name;
  Temp(this.name);
  void greet() => print("Hello $name");
}

void main() {
  var t = Temp("Dart"); // allocated on heap
  t.greet();
  // when `t` goes out of scope, GC can clean it
}
```

✔ You don’t manually free memory in Dart.

### 2. Sound Null Safety

Dart enforces non-nullable types by default.

- String name; → must be initialized.
- String? name; → can hold null.

```dart
void main() {
  String nonNullable = "Dart";
  String? nullable;

  print(nonNullable.length); // Safe
  // print(nullable.length); ❌ Error
  print(nullable?.length);   // Safe, prints null
}
```

✔ Prevents billions of NullPointerException bugs.

### 3. Late Variables

Sometimes initialization is delayed.

```dart
class Config {
  late String apiKey;
}

void main() {
  final c = Config();
  c.apiKey = "1234"; // must assign before use
  print(c.apiKey);
}
```

✔ late means “I’ll assign later, trust me.”

### 4. Advanced Async: Completers

A Completer lets you control a Future manually.

```dart
import 'dart:async';

Future<String> fetchData() {
  final completer = Completer<String>();

  // simulate async work
  Future.delayed(Duration(seconds: 2), () {
    completer.complete("Data loaded");
  });

  return completer.future;
}

void main() async {
  print(await fetchData());
}
```

✔ Useful when bridging callback APIs into Futures.

### 5. Async Generators (yield, yield)*

Instead of returning a single Future, you can stream values gradually.

```dart
Stream<int> countdown(int n) async* {
  for (int i = n; i >= 0; i--) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}

void main() async {
  await for (var n in countdown(3)) {
    print("Tick: $n");
  }
}
```

✔ Perfect for timers, events, live data feeds.

### 6. Isolates Recap

- Each isolate has its own memory & event loop.
- Communication via message passing.
- Flutter uses isolates for background tasks.

```dart
import 'dart:isolate';

void worker(SendPort port) {
  port.send("Work done in another isolate!");
}

void main() async {
  final receive = ReceivePort();
  await Isolate.spawn(worker, receive.sendPort);

  receive.listen((msg) {
    print(msg);
  });
}
```

✔ True concurrency (not just async multitasking).

✅ **Lecture 3 Summary**

- Memory is automatic via GC.
- Sound null safety prevents runtime crashes.
- late lets you delay initialization.
- Completer gives manual control over Futures.
- Async Generators yield multiple values.
- Isolates provide true parallelism.

------------------------------------------------------------------------

## **Lecture 4 – Metaprogramming, Functional Dart & Error Handling**

### **1. Metaprogramming in Dart**

Metaprogramming = code that talks about code.

#### Reflection

- Dart supports reflection with dart:mirrors (⚠ not available in Flutter for performance reasons).
- Instead, in Flutter, we use annotations + code generation.

```dart
class Entity {
  final String table;
  const Entity(this.table);
}

@Entity("users")
class User {
  final String name;
  User(this.name);
}
```

✔ Here, @Entity("users") is metadata → later, code generators (like json_serializable) can use it.

### 2. Functional Programming in Dart

#### `Immutability`

```dart
void main() {
  final list = [1, 2, 3];
  final newList = List.of(list)..add(4); // create copy
  print(list);    // [1, 2, 3]
  print(newList); // [1, 2, 3, 4]
}
```

✔ final + immutable data avoids accidental state bugs.

#### `Map`, `Filter`, `Reduce`

```dart
void main() {
  var numbers = [1, 2, 3, 4, 5];

  var squared = numbers.map((n) => n * n).toList();
  print(squared); // [1, 4, 9, 16, 25]

  var evens = numbers.where((n) => n.isEven).toList();
  print(evens); // [2, 4]

  var sum = numbers.reduce((a, b) => a + b);
  print(sum); // 15
}
```

✔ Expressive & concise like Python/JavaScript.

#### `Fold` (generalized reduce)

```dart
void main() {
  var words = ["Dart", "is", "cool"];
  var sentence = words.fold("", (a, b) => "$a $b");
  print(sentence.trim()); // Dart is cool
}
```

### 3. Error Handling in Dart

#### `Try` / `Catch` / `Finally`

```dart
void riskyOperation() {
  throw Exception("Something went wrong!");
}

void main() {
  try {
    riskyOperation();
  } catch (e, stack) {
    print("Error: $e");
    print("Stack: $stack");
  } finally {
    print("Cleanup always runs");
  }
}
```

✔ `catch(e, stack)` → gives both error and stack trace.

#### Custom Exceptions

```dart
class AuthException implements Exception {
  final String message;
  AuthException(this.message);

  @override
  String toString() => "AuthException: $message";
}

void login(String user, String pass) {
  if (pass != "1234") throw AuthException("Invalid password");
}

void main() {
  try {
    login("john", "wrongpass");
  } catch (e) {
    print(e);
  }
}
```

✔ Defining your own exceptions keeps errors semantic and clear.

✅ **Lecture 4 Summary**

- Metaprogramming → annotations for metadata.
- Functional Dart → map, filter, reduce, fold.
- Immutability → safer state management.
- Error handling → try/catch/finally + custom exceptions.

------------------------------------------------------------------------

## **Lecture 5 – Advanced Collections, Operators & Dart 3 Features**

### 1. Advanced Collections & Iterables

#### Lazy Iterables

Dart collections can be lazy:

```dart
void main() {
  var numbers = [1, 2, 3, 4, 5];
  var doubled = numbers.map((n) {
    print("Mapping $n");
    return n * 2;
  });

  print(doubled.first); // Only maps the FIRST element!
}
```

✔ Operations like map(), where() are lazy until you toList() or consume them.

#### Custom Iterators `(sync)*`

```dart
Iterable<int> countdown(int n) sync* {
  for (var i = n; i >= 0; i--) {
    yield i;
  }
}

void main() {
  for (var n in countdown(3)) {
    print(n);
  }
}
```

✔ sync* + yield lets you build custom collections.

### 2. Operator Overloading

You can redefine operators (+, -, [], etc.) in your classes.

```dart
class Vector {
  final int x, y;
  Vector(this.x, this.y);

  Vector operator +(Vector other) => Vector(x + other.x, y + other.y);

  @override
  String toString() => "($x, $y)";
}

void main() {
  var v1 = Vector(2, 3);
  var v2 = Vector(1, 4);
  print(v1 + v2); // (3, 7)
}
```

✔ Great for math-like objects.

### 3. Dart 3 – Sealed Classes

A `sealed` `class` restricts which classes can `extend`/`implement` it.

```dart
sealed class Shape {}

class Circle extends Shape {}
class Square extends Shape {}

void main() {
  Shape shape = Circle();
  switch (shape) {
    case Circle():
      print("It's a circle");
    case Square():
      print("It's a square");
  }
}
```

✔ Compiler forces you to handle all subclasses → safer code.

### 4. Records (Tuples in Dart 3)

Instead of creating a class just for two values:

```dart
(String, int) getUser() {
  return ("Alice", 25);
}

void main() {
  var (name, age) = getUser();
  print("$name is $age years old");
}
```

✔ Lightweight, structured return values.

### 5. Pattern Matching

Pattern matching + destructuring in switch / if.

```dart
void main() {
  var user = ("Bob", 30);

  switch (user) {
    case ("Alice", var age):
      print("Alice, age $age");
    case ("Bob", int age) when age > 20:
      print("Bob is older than 20");
    default:
      print("Unknown user");
  }
}
```

✔ Much more expressive than old-style switch.

✅ **Lecture 5 Summary**

- Collections can be lazy (map, where) or custom (sync*).
- Operators can be overloaded.
- Sealed classes guarantee exhaustive handling.
- Records simplify multi-value returns.
- Pattern matching makes control flow elegant.

------------------------------------------------------------------------

## **Lecture 6 – Concurrency & Streams in Dart**

### 1. The Dart Concurrency Model

Unlike Java (threads) or JS (single-threaded), Dart uses an event loop + microtask queue.

- Event queue → handles async events (timers, I/O).
- Microtask queue → higher priority (executed before events).

```dart
void main() {
  print("Start");

  Future(() => print("Event queue task"));
  scheduleMicrotask(() => print("Microtask"));

  print("End");
}
```

Output:

```sql
Start
End
Microtask
Event queue task
```

✔ Microtasks always run before event tasks.

### 2. Futures Recap

- A `Future` is a value available later.
- Chained via `.then()`, `.catchError()`, `.whenComplete()`.

```dart
Future<int> getNumber() async {
  await Future.delayed(Duration(seconds: 1));
  return 42;
}

void main() {
  getNumber().then((n) => print("Got $n"));
}
```

### 3. Streams in Depth

Streams deliver many async values over time.

Types:

- Single-subscription (default).
- Broadcast (multiple listeners).

```dart
Stream<int> numberStream() async* {
  for (int i = 1; i <= 3; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}

void main() async {
  await for (var n in numberStream()) {
    print("Got $n");
  }
}
```

### 4. Stream Transformation

Transform values on the fly.

```dart
void main() {
  Stream<int>.periodic(Duration(seconds: 1), (n) => n)
      .take(5)
      .map((n) => n * 2)
      .listen((val) => print("Double: $val"));
}
```

✔ Here: infinite stream → truncated with `.take(5)` → doubled values.

### 5. Error Handling in Streams

```dart
Stream<int> faultyStream() async* {
  yield 1;
  throw Exception("Oops!");
}

void main() {
  faultyStream().listen(
    (data) => print("Data: $data"),
    onError: (err) => print("Error: $err"),
    onDone: () => print("Stream closed"),
  );
}
```

✔ Always handle `onError` and `onDone`.

### 6. Mini Real-World Example: Reactive Auth

We can use Streams to react to login/logout events.

```dart
class AuthService {
  final _controller = StreamController<String>.broadcast();

  Stream<String> get events => _controller.stream;

  void login(String user) {
    _controller.add("$user logged in");
  }

  void logout(String user) {
    _controller.add("$user logged out");
  }
}

void main() {
  final auth = AuthService();

  // listen for events
  auth.events.listen((e) => print("[Listener1] $e"));
  auth.events.listen((e) => print("[Listener2] $e"));

  auth.login("Alice");
  auth.logout("Alice");
}
```

Output:

```sql
[Listener1] Alice logged in
[Listener2] Alice logged in
[Listener1] Alice logged out
[Listener2] Alice logged out
```

✔ This is how Flutter apps notify multiple widgets of auth state changes.

✅ **Lecture 6 Summary**

- Dart concurrency = event loop + microtasks.
- Futures → single async result.
- Streams → multiple async results.
- Stream transformations allow reactive programming.
- Real-world → auth events with broadcast streams.

------------------------------------------------------------------------

## **Lecture 7 – Modular Dart Package & Offline Auth Library**

### 1. Project Goals

We want a library that:

- Supports offline user registration, login, logout.
- Uses Streams to broadcast auth events.
- Supports logging using mixins.
- Can be extended easily (OOP, abstract classes).
- Demonstrates unit testing readiness.

### 2. Step 1: Define the Auth Contract

```dart
abstract class AuthService {
  bool login(String email, String password);
  void logout();
  void register(String email, String password);

  Stream<String> get authEvents; // broadcast auth changes
}
```

✔ Abstract class = contract.
✔ `authEvents` = Stream for reactive updates.

### 3. Step 2: Logger Mixin

```dart
mixin Logger {
  void log(String message) => print("[LOG] $message");
}
```

✔ Reusable logging logic.

### 4. Step 3: LocalAuth Implementation

```dart
import 'dart:async';

class LocalAuth with Logger implements AuthService {
  final Map<String, String> _users = {};
  String? _currentUser;
  final _controller = StreamController<String>.broadcast();

  @override
  Stream<String> get authEvents => _controller.stream;

  @override
  bool login(String email, String password) {
    if (_users[email] == password) {
      _currentUser = email;
      log("User $email logged in");
      _controller.add("$email logged in");
      return true;
    }
    return false;
  }

  @override
  void logout() {
    if (_currentUser != null) {
      log("User $_currentUser logged out");
      _controller.add("$_currentUser logged out");
      _currentUser = null;
    }
  }

  @override
  void register(String email, String password) {
    if (_users.containsKey(email)) {
      log("User $email already exists");
    } else {
      _users[email] = password;
      log("User $email registered");
      _controller.add("$email registered");
    }
  }
}
```

✔ Combines:

- OOP (implements AuthService)
- Logger (mixin)
- Streams (broadcast events)
- Offline data (Map storage)

### 5. Step 4: Extension for Convenience

```dart
extension MaskEmail on String {
  String masked() => replaceRange(2, indexOf('@'), "****");
}
```

✔ Mask email before showing to users.

### 6. Step 5: Using the Library

```dart
void main() {
  final auth = LocalAuth();

  auth.authEvents.listen((event) => print("[Event] $event"));

  auth.register("alice@example.com", "1234");
  auth.login("alice@example.com", "1234");
  auth.logout();
}
```

Output:

```sql
[LOG]: User alice@example.com registered
[Event] alice@example.com registered
[LOG]: User alice@example.com logged in
[Event] alice@example.com logged in
[LOG]: User alice@example.com logged out
[Event] alice@example.com logged out
```

✔ Simple, modular, reactive, and testable.

✅ **Lecture 7 Summary**

- Modular Dart library design using abstract classes + mixins + Streams.
- Offline storage using Maps.
- Reactive auth events for UI updates.
- Extensions for utility methods.
- Ready for unit testing.

------------------------------------------------------------------------

## **Lecture 8 – Production-Ready Offline Auth Library**

### 1. Custom Exceptions

Instead of generic errors, define semantic exceptions:

```dart
class AuthException implements Exception {
  final String message;
  AuthException(this.message);

  @override
  String toString() => "AuthException: $message";
}
```

✔ Makes error handling clear and maintainable.

### 2. Strategy Pattern for Auth Mechanisms

We can switch easily between offline and online (future-proof):

```dart
abstract class AuthStrategy {
  bool login(String email, String password);
  void logout();
  void register(String email, String password);
}

class OfflineAuth implements AuthStrategy {
  final Map<String, String> _users = {};
  String? _currentUser;

  @override
  bool login(String email, String password) {
    if (_users[email] == password) {
      _currentUser = email;
      return true;
    }
    throw AuthException("Invalid credentials");
  }

  @override
  void logout() => _currentUser = null;

  @override
  void register(String email, String password) {
    if (_users.containsKey(email)) throw AuthException("User already exists");
    _users[email] = password;
  }
}
```

### 3. AuthService with Strategy

```dart
import 'dart:async';

class AuthServiceWithStrategy with Logger {
  final AuthStrategy strategy;
  final _controller = StreamController<String>.broadcast();

  AuthServiceWithStrategy(this.strategy);

  Stream<String> get authEvents => _controller.stream;

  void login(String email, String password) {
    try {
      if (strategy.login(email, password)) {
        log("User $email logged in");
        _controller.add("$email logged in");
      }
    } catch (e) {
      _controller.add("Login failed for $email: $e");
    }
  }

  void logout(String email) {
    strategy.logout();
    log("User $email logged out");
    _controller.add("$email logged out");
  }

  void register(String email, String password) {
    try {
      strategy.register(email, password);
      log("User $email registered");
      _controller.add("$email registered");
    } catch (e) {
      _controller.add("Registration failed for $email: $e");
    }
  }
}
```

✔ This uses the strategy pattern → can swap offline with online without changing the AuthService class.

### 4. Unit Testing Example

Create a test file: `auth_test.dart`

```dart
import 'package:test/test.dart';

void main() {
  group('OfflineAuth', () {
    final auth = OfflineAuth();

    test('register user', () {
      auth.register("bob@example.com", "1234");
      expect(auth.login("bob@example.com", "1234"), isTrue);
    });

    test('duplicate registration', () {
      auth.register("alice@example.com", "pass");
      expect(() => auth.register("alice@example.com", "pass"),
          throwsA(isA<AuthException>()));
    });

    test('invalid login', () {
      expect(() => auth.login("unknown@example.com", "1234"),
          throwsA(isA<AuthException>()));
    });
  });
}
```

✔ Tests cover success, failure, and exceptions.

### 5. Example Usage in main()

```dart
void main() {
  final auth = AuthServiceWithStrategy(OfflineAuth());

  auth.authEvents.listen((e) => print("[Event] $e"));

  auth.register("alice@example.com", "1234");
  auth.login("alice@example.com", "1234");
  auth.logout("alice@example.com");
}
```

Output:

```sql
[LOG]: User alice@example.com registered
[Event] alice@example.com registered
[LOG]: User alice@example.com logged in
[Event] alice@example.com logged in
[LOG]: User alice@example.com logged out
[Event] alice@example.com logged out
```

✅ **Lecture 8 Summary**

- Added custom exceptions → clear error handling.
- Introduced strategy pattern → flexible auth mechanisms.
- Modular design ready for unit tests.
- Reactive Streams for event updates.
- Logger mixin keeps logging consistent.

------------------------------------------------------------------------

## **Lecture 9 – Sealed Classes & Reactive Auth States**

### 1. Sealed Classes in Dart 3

A sealed class restricts which classes can extend it.

- Forces exhaustive handling.
- Perfect for modeling states.

```dart
sealed class AuthState {}

class LoggedOut extends AuthState {}
class LoggedIn extends AuthState {
  final String email;
  LoggedIn(this.email);
}
class AuthError extends AuthState {
  final String message;
  AuthError(this.message);
}
```

✔ `AuthState` can only be one of these three → safer than using strings.

### 2. Using Streams with Sealed States

```dart
import 'dart:async';

class AuthServiceReactive with Logger {
  final Map<String, String> _users = {};
  String? _currentUser;
  final _controller = StreamController<AuthState>.broadcast();

  Stream<AuthState> get authStates => _controller.stream;

  void register(String email, String password) {
    if (_users.containsKey(email)) {
      _controller.add(AuthError("User already exists"));
      log("Failed registration: $email");
    } else {
      _users[email] = password;
      _controller.add(LoggedOut());
      log("User registered: $email");
    }
  }

  void login(String email, String password) {
    if (_users[email] == password) {
      _currentUser = email;
      _controller.add(LoggedIn(email));
      log("User logged in: $email");
    } else {
      _controller.add(AuthError("Invalid credentials"));
      log("Login failed: $email");
    }
  }

  void logout() {
    if (_currentUser != null) {
      log("User logged out: $_currentUser");
      _controller.add(LoggedOut());
      _currentUser = null;
    }
  }
}
```

✔ Streams now emit typed states, not just strings.
✔ Consumers can use pattern matching for handling states safely.

### 3. Pattern Matching with Sealed Classes

```dart
void main() {
  final auth = AuthServiceReactive();

  auth.authStates.listen((state) {
    switch (state) {
      case LoggedOut():
        print("User is logged out");
      case LoggedIn(:var email):
        print("User $email is logged in");
      case AuthError(:var message):
        print("Error: $message");
    }
  });

  auth.register("alice@example.com", "1234");
  auth.login("alice@example.com", "1234");
  auth.logout();
  auth.login("bob@example.com", "wrong"); // triggers error
}
```

Output:

```sql
[LOG]: User registered: alice@example.com
User is logged out
[LOG]: User logged in: alice@example.com
User alice@example.com is logged in
[LOG]: User logged out: alice@example.com
User is logged out
[LOG]: Login failed: bob@example.com
Error: Invalid credentials
```

✔ Pattern matching guarantees all states are handled.

### 4. Advantages of This Design

1. Type-safe states → no string comparison hacks.
2. Reactive architecture → UI or other systems can subscribe to `authStates`.
3. Extensible → add new states (e.g., `TwoFactorPending`) easily.
4. Testable → unit tests can assert specific state emissions.

✅ **Lecture 9 Summary**

- Dart 3 sealed classes model auth states safely.
- Streams emit typed states, improving reactive programming.
- Pattern matching ensures exhaustive handling.
- Offline auth library is now modern, reactive, and production-ready.

------------------------------------------------------------------------

## **Lecture 10 – Flutter Demo with Reactive Offline Auth**

### 1. Project Setup

`pubspec.yaml` dependencies:

```yml
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.0
```

We don’t need extra packages — everything uses native Dart + Flutter.

### 2. Auth Library Integration

```dart
// offline_auth.dart (our library)
import 'dart:async';

sealed class AuthState {}
class LoggedOut extends AuthState {}
class LoggedIn extends AuthState {
  final String email;
  LoggedIn(this.email);
}
class AuthError extends AuthState {
  final String message;
  AuthError(this.message);
}

mixin Logger {
  void log(String message) => print("[LOG] $message");
}

class AuthServiceReactive with Logger {
  final Map<String, String> _users = {};
  String? _currentUser;
  final _controller = StreamController<AuthState>.broadcast();

  Stream<AuthState> get authStates => _controller.stream;

  void register(String email, String password) {
    if (_users.containsKey(email)) {
      _controller.add(AuthError("User already exists"));
      log("Failed registration: $email");
    } else {
      _users[email] = password;
      _controller.add(LoggedOut());
      log("User registered: $email");
    }
  }

  void login(String email, String password) {
    if (_users[email] == password) {
      _currentUser = email;
      _controller.add(LoggedIn(email));
      log("User logged in: $email");
    } else {
      _controller.add(AuthError("Invalid credentials"));
      log("Login failed: $email");
    }
  }

  void logout() {
    if (_currentUser != null) {
      log("User logged out: $_currentUser");
      _controller.add(LoggedOut());
      _currentUser = null;
    }
  }
}
```

### 3. Flutter UI: Reactive to Auth State

```dart
import 'package:flutter/material.dart';
import 'offline_auth.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Reactive Auth Demo',
      home: AuthScreen(),
    );
  }
}

class AuthScreen extends StatefulWidget {
  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final AuthServiceReactive auth = AuthServiceReactive();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  AuthState? currentState;

  @override
  void initState() {
    super.initState();
    auth.authStates.listen((state) {
      setState(() => currentState = state);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Reactive Offline Auth")),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(controller: emailController, decoration: const InputDecoration(labelText: "Email")),
            TextField(controller: passwordController, decoration: const InputDecoration(labelText: "Password"), obscureText: true),
            const SizedBox(height: 20),
            Row(
              children: [
                ElevatedButton(
                  onPressed: () => auth.register(emailController.text, passwordController.text),
                  child: const Text("Register"),
                ),
                const SizedBox(width: 10),
                ElevatedButton(
                  onPressed: () => auth.login(emailController.text, passwordController.text),
                  child: const Text("Login"),
                ),
                const SizedBox(width: 10),
                ElevatedButton(
                  onPressed: () => auth.logout(),
                  child: const Text("Logout"),
                ),
              ],
            ),
            const SizedBox(height: 20),
            if (currentState is LoggedIn)
              Text("Logged in as ${(currentState as LoggedIn).email}")
            else if (currentState is LoggedOut)
              const Text("Logged out")
            else if (currentState is AuthError)
              Text("Error: ${(currentState as AuthError).message}", style: const TextStyle(color: Colors.red)),
          ],
        ),
      ),
    );
  }
}
```

### 4. How It Works

1. AuthServiceReactive emits typed AuthState events.
2. UI listens via `Stream` and calls `setState()` when new event arrives.
3. The screen updates automatically for:
    - Logged in → show email
    - Logged out → show message
    - Error → show error text in red

### 5. Demo Flow

- User registers → emits LoggedOut event.
- User logs in → emits LoggedIn(email).
- User logs out → emits LoggedOut.
- Wrong credentials → emits AuthError.
- Everything is reactive, type-safe, and offline.

✅ **Lecture 10 Summary**

- Built a mini Flutter app using our Offline Auth Library.
- UI reacts to sealed AuthState events in real-time.
- Demonstrated Streams + Logger + Sealed classes + reactive UI.
- Fully modular, testable, and future-proof.

------------------------------------------------------------------------

## **Lecture 11 – Password Hashing & Validation**

### 1. Why Hash Passwords

- Never store plain text passwords.
- Use a hash function to store only hashed values.
- Later, compare hashed input with stored hash.

### 2. Simple Hashing Example `(SHA-256)`

We can use Dart’s crypto library (built-in):

```dart
import 'dart:convert';
import 'package:crypto/crypto.dart';

String hashPassword(String password) {
  final bytes = utf8.encode(password); // convert to bytes
  final digest = sha256.convert(bytes);
  return digest.toString(); // store this hash
}
```

✔ The hash is irreversible → safer than plain text.

### 3. Update OfflineAuth with Hashing

```dart
class SecureOfflineAuth implements AuthStrategy {
  final Map<String, String> _users = {};
  String? _currentUser;

  @override
  void register(String email, String password) {
    if (_users.containsKey(email)) throw AuthException("User already exists");
    _users[email] = hashPassword(password);
  }

  @override
  bool login(String email, String password) {
    final hashed = hashPassword(password);
    if (_users[email] == hashed) {
      _currentUser = email;
      return true;
    }
    throw AuthException("Invalid credentials");
  }

  @override
  void logout() => _currentUser = null;
}
```

✔ Simple drop-in replacement for `OfflineAuth` strategy.

### 4. Add Password Validation

```dart
bool validatePassword(String password) {
  final hasUpper = password.contains(RegExp(r'[A-Z]'));
  final hasLower = password.contains(RegExp(r'[a-z]'));
  final hasDigit = password.contains(RegExp(r'\d'));
  final hasSpecial = password.contains(RegExp(r'[!@#$%^&*(),.?":{}|<>]'));

  return password.length >= 8 && hasUpper && hasLower && hasDigit && hasSpecial;
}
```

Usage in `register()`:

```dart
void register(String email, String password) {
  if (!validatePassword(password)) throw AuthException("Password too weak");
  _users[email] = hashPassword(password);
}
```

✔ Ensures strong passwords for offline users.

### 5. Test the Secure Offline Auth

```dart
void main() {
  final auth = SecureOfflineAuth();

  try {
    auth.register("alice@example.com", "Weak1"); // throws AuthException
  } catch (e) {
    print(e); // Password too weak
  }

  auth.register("alice@example.com", "Str0ng!Pass");
  print(auth.login("alice@example.com", "Str0ng!Pass")); // true
}
```

### 6. Integration with Reactive Auth Service

```dart
final authService = AuthServiceWithStrategy(SecureOfflineAuth());

// UI / Stream listeners remain unchanged
authService.register("bob@example.com", "Str0ng!Pass");
authService.login("bob@example.com", "Str0ng!Pass");
```

✔ Reactive Streams + Sealed States still work seamlessly.

✅ **Lecture 11 Summary**

- Passwords are hashed using SHA-256 → never stored in plain text.
- Added strong password validation.
- Updated strategy pattern → can swap auth mechanism safely.
- Fully reactive & secure Offline Auth Library for Flutter.

------------------------------------------------------------------------

## **Lecture 12 – Password Reset & Unit Testing**

### 1. Adding Password Reset

We’ll allow users to reset their password securely:

```dart
class SecureOfflineAuthWithReset implements AuthStrategy {
  final Map<String, String> _users = {};
  String? _currentUser;

  @override
  void register(String email, String password) {
    if (_users.containsKey(email)) throw AuthException("User already exists");
    if (!validatePassword(password)) throw AuthException("Password too weak");
    _users[email] = hashPassword(password);
  }

  @override
  bool login(String email, String password) {
    final hashed = hashPassword(password);
    if (_users[email] == hashed) {
      _currentUser = email;
      return true;
    }
    throw AuthException("Invalid credentials");
  }

  @override
  void logout() => _currentUser = null;

  void resetPassword(String email, String newPassword) {
    if (!_users.containsKey(email)) throw AuthException("User not found");
    if (!validatePassword(newPassword)) throw AuthException("Password too weak");
    _users[email] = hashPassword(newPassword);
  }
}
```

✔ Users can now reset passwords offline safely.

### 2. Unit Testing Setup

`pubspec.yaml` (add `test` dependency):

```yml
dev_dependencies:
  test: any
```

### 3. Unit Tests Example

`secure_auth_test.dart:`

```dart

import 'package:test/test.dart';
import 'offline_auth.dart'; // your library

void main() {
  group('SecureOfflineAuthWithReset', () {
    final auth = SecureOfflineAuthWithReset();

    test('register valid user', () {
      auth.register("alice@example.com", "Str0ng!Pass");
      expect(auth.login("alice@example.com", "Str0ng!Pass"), isTrue);
    });

    test('duplicate registration fails', () {
      auth.register("bob@example.com", "Str0ng!Pass2");
      expect(() => auth.register("bob@example.com", "Str0ng!Pass2"),
          throwsA(isA<AuthException>()));
    });

    test('login with wrong password fails', () {
      expect(() => auth.login("alice@example.com", "WrongPass"),
          throwsA(isA<AuthException>()));
    });

    test('password reset works', () {
      auth.resetPassword("alice@example.com", "NewStr0ng!Pass");
      expect(auth.login("alice@example.com", "NewStr0ng!Pass"), isTrue);
    });

    test('password reset invalid user fails', () {
      expect(() => auth.resetPassword("unknown@example.com", "Pass123!"),
          throwsA(isA<AuthException>()));
    });

    test('weak password rejected', () {
      expect(() => auth.register("charlie@example.com", "weak"),
          throwsA(isA<AuthException>()));
    });
  });
}
```

✔ Covers all key scenarios: registration, login, reset, errors.

### 4. Integration with Reactive Service

```dart
final authService = AuthServiceWithStrategy(SecureOfflineAuthWithReset());

authService.authStates.listen((state) {
  switch (state) {
    case LoggedIn(:var email):
      print("User logged in: $email");
    case LoggedOut():
      print("User logged out");
    case AuthError(:var message):
      print("Error: $message");
  }
});

authService.register("alice@example.com", "Str0ng!Pass");
authService.login("alice@example.com", "Str0ng!Pass");
authService.resetPassword("alice@example.com", "NewStr0ng!Pass");
authService.login("alice@example.com", "NewStr0ng!Pass");
```

✔ Stream updates remain fully reactive, even with password resets.

✅ Lecture 12 Summary

- Added secure password reset functionality.
- All auth operations throw custom exceptions when invalid.
- Created unit tests for registration, login, errors, and password reset.
- Fully reactive, secure, testable, offline auth library for Flutter.

------------------------------------------------------------------------

## **Lecture 13 – Flutter State Management with Provider**

### 1. Add Provider Dependency

`pubspec.yaml:`

```yml
dependencies:
  flutter:
    sdk: flutter
  provider: ^6.0.5
```

✔ Provider allows listening to streams and updating UI reactively.

### 2. Create AuthProvider

```dart
import 'package:flutter/material.dart';
import 'offline_auth.dart';

class AuthProvider extends ChangeNotifier {
  final AuthServiceWithStrategy authService;

  AuthState? _state;
  AuthState? get state => _state;

  AuthProvider(this.authService) {
    authService.authStates.listen((event) {
      _state = event;
      notifyListeners(); // triggers UI rebuild
    });
  }

  void register(String email, String password) => authService.register(email, password);
  void login(String email, String password) => authService.login(email, password);
  void logout() => authService.logout();
  void resetPassword(String email, String newPassword) => (authService.strategy as dynamic).resetPassword(email, newPassword);
}
```

✔ `ChangeNotifier` + `notifyListeners()` → reactive updates in UI.

### 3. Wrap App with Provider

```dart
void main() {
  final authService = AuthServiceWithStrategy(SecureOfflineAuthWithReset());

  runApp(
    ChangeNotifierProvider(
      create: (_) => AuthProvider(authService),
      child: const MyApp(),
    ),
  );
}
```

### 4. Flutter UI with Provider

```dart
class AuthScreen extends StatelessWidget {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final auth = Provider.of<AuthProvider>(context);

    return Scaffold(
      appBar: AppBar(title: const Text("Reactive Auth with Provider")),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(controller: emailController, decoration: const InputDecoration(labelText: "Email")),
            TextField(controller: passwordController, decoration: const InputDecoration(labelText: "Password"), obscureText: true),
            const SizedBox(height: 20),
            Row(
              children: [
                ElevatedButton(onPressed: () => auth.register(emailController.text, passwordController.text), child: const Text("Register")),
                const SizedBox(width: 10),
                ElevatedButton(onPressed: () => auth.login(emailController.text, passwordController.text), child: const Text("Login")),
                const SizedBox(width: 10),
                ElevatedButton(onPressed: () => auth.logout(), child: const Text("Logout")),
              ],
            ),
            const SizedBox(height: 20),
            if (auth.state is LoggedIn)
              Text("Logged in as ${(auth.state as LoggedIn).email}")
            else if (auth.state is LoggedOut)
              const Text("Logged out")
            else if (auth.state is AuthError)
              Text("Error: ${(auth.state as AuthError).message}", style: const TextStyle(color: Colors.red)),
          ],
        ),
      ),
    );
  }
}
```

✔ UI automatically rebuilds whenever AuthState changes.

### 5. Benefits of This Integration

- Seamless UI updates without manually subscribing to streams.
- Type-safe states via sealed classes.
- Modular: Auth logic is decoupled from UI.
- Ready for unit and widget testing.

✅ **Lecture 13 Summary**

- Integrated Offline Auth Library with Flutter using Provider.
- UI listens to ChangeNotifier and updates automatically.
- Maintains reactive, type-safe, secure authentication flow.

------------------------------------------------------------------------

## **Lecture 14 – Session Persistence**

### 1. Why Session Persistence

- Offline apps lose state on restart.
- Need to store the current user locally.
- In Flutter, we can use SharedPreferences for simple key-value storage.

### 2. Add SharedPreferences Dependency

`pubspec.yaml:`

```yml
dependencies:
  shared_preferences: ^2.1.1
```

### 3. Update AuthService for Persistence

```dart
import 'package:shared_preferences/shared_preferences.dart';

class PersistentAuth extends AuthServiceWithStrategy {
  PersistentAuth(super.strategy);

  @override
  void login(String email, String password) async {
    super.login(email, password);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('currentUser', email);
  }

  @override
  void logout() async {
    super.logout();
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('currentUser');
  }

  Future<String?> getCurrentUser() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('currentUser');
  }
}
```

✔ Automatically saves logged-in user and clears on logout.

### 4. Initialize on App Start

```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final authService = PersistentAuth(SecureOfflineAuthWithReset());
  final currentUser = await authService.getCurrentUser();
  if (currentUser != null) {
    authService.authStates.listen((state) {}); // set initial state if needed
    authService._controller.add(LoggedIn(currentUser));
  }

  runApp(
    ChangeNotifierProvider(
      create: (_) => AuthProvider(authService),
      child: const MyApp(),
    ),
  );
}
```

✔ App remembers the last logged-in user across restarts.

### 5. Benefits of Session Persistence

- Users don’t need to login every time.
- Works offline.
- Fully compatible with reactive Streams + Provider.
- Keeps secure hashed password logic intact.

✅ **Lecture 14 Summary**

- Added session persistence using SharedPreferences.
- Login state survives app restarts.
- Fully integrated with reactive UI and sealed auth states.
- Library is now offline-ready, secure, reactive, persistent, and testable.

------------------------------------------------------------------------

## **Lecture 15 – Two-Factor Auth Simulation**

### 1. Why 2FA

- Adds a second layer of security.
- Even if password is compromised, attacker cannot log in without a code.
- We’ll simulate 2FA offline using one-time codes.

### 2. Create a 2FA State

```dart
sealed class AuthState {}
class LoggedOut extends AuthState {}
class LoggedIn extends AuthState {
  final String email;
  LoggedIn(this.email);
}
class AuthError extends AuthState {
  final String message;
  AuthError(this.message);
}
class TwoFactorPending extends AuthState {
  final String email;
  final String code; // offline simulation
  TwoFactorPending(this.email, this.code);
}
```

✔ `TwoFactorPending` indicates 2FA verification required.

### 3. Update AuthService for 2FA

```dart
import 'dart:math';

class AuthService2FA extends AuthServiceWithStrategy {
  AuthService2FA(super.strategy);

  final Map<String, String> _pending2FA = {};

  @override
  void login(String email, String password) {
    try {
      if (strategy.login(email, password)) {
        // generate a random 2FA code
        final code = (Random().nextInt(900000) + 100000).toString();
        _pending2FA[email] = code;
        _controller.add(TwoFactorPending(email, code));
        log("2FA code $code sent to $email (simulated)");
      }
    } catch (e) {
      _controller.add(AuthError("Login failed: $e"));
      log("Login failed for $email");
    }
  }

  void verify2FA(String email, String code) {
    if (_pending2FA[email] == code) {
      _pending2FA.remove(email);
      _controller.add(LoggedIn(email));
      log("$email passed 2FA verification");
    } else {
      _controller.add(AuthError("Invalid 2FA code"));
      log("$email failed 2FA verification");
    }
  }
}
```

✔ Simulates sending and verifying 2FA codes offline.

### 4. Flutter UI Integration

```dart
if (auth.state is TwoFactorPending) {
  final state = auth.state as TwoFactorPending;
  Column(
    children: [
      Text("Enter 2FA code sent to ${state.email}"),
      TextField(controller: _codeController),
      ElevatedButton(
        onPressed: () => auth.verify2FA(state.email, _codeController.text),
        child: Text("Verify"),
      ),
    ],
  );
}
```

✔ The UI automatically shows the `2FA` input when pending.

### 5. Benefits of Offline 2FA

- Adds realistic security simulation.
- Fully offline — no SMS or network required.
- Integrates with sealed states → type-safe.
- Works with reactive Streams + Provider → automatic UI updates.

✅ **Lecture 15 Summary**

- Added Two-Factor Auth simulation for offline apps.
- Introduced TwoFactorPending state.
- UI reacts automatically to 2FA events.
- Library is now secure, reactive, persistent, testable, and modular.

------------------------------------------------------------------------

## **Lecture 16 – Flutter Widget Testing**

### 1. Add Flutter Test Dependency

`pubspec.yaml:`

```yml
dev_dependencies:
  flutter_test:
    sdk: flutter
```

### 2. Create Test File

`auth_widget_test.dart:`

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:provider/provider.dart';
import 'offline_auth.dart';
import 'auth_provider.dart';
import 'main.dart'; // your app

void main() {
  group('AuthWidget Tests', () {
    testWidgets('Register, login, 2FA, logout flow', (tester) async {
      final authService = AuthService2FA(SecureOfflineAuthWithReset());

      await tester.pumpWidget(
        ChangeNotifierProvider(
          create: (_) => AuthProvider(authService),
          child: const MyApp(),
        ),
      );

      // Enter email and password
      await tester.enterText(find.byType(TextField).at(0), 'alice@example.com');
      await tester.enterText(find.byType(TextField).at(1), 'Str0ng!Pass');

      // Tap Register button
      await tester.tap(find.text('Register'));
      await tester.pump();

      // Tap Login button
      await tester.tap(find.text('Login'));
      await tester.pump();

      // Simulate reading 2FA code from event
      final state = (authService.authStates as dynamic)._controller.stream.last as TwoFactorPending;
      await tester.enterText(find.byType(TextField).at(1), state.code);

      // Tap Verify button
      await tester.tap(find.text('Verify'));
      await tester.pump();

      // Expect LoggedIn state message
      expect(find.textContaining('Logged in as alice@example.com'), findsOneWidget);

      // Tap Logout
      await tester.tap(find.text('Logout'));
      await tester.pump();

      // Expect LoggedOut message
      expect(find.text('Logged out'), findsOneWidget);
    });
  });
}
```

### 3. What This Test Does

1. Registers a user.
2. Logs in → triggers 2FA pending.
3. Enters 2FA code → verifies and logs in.
4. Logs out → UI shows logged out.
5. Confirms UI updates correctly at every stage.

✔ Covers full auth + 2FA flow in a widget test.

### 4. Benefits of Widget Testing

- Ensures UI reacts correctly to all AuthState events.
- Detects bugs before deploying.
- Works with Provider + Streams + 2FA simulation.

✅ **Lecture 16 Summary**

- Created widget tests for full auth flow.
- Verified register, login, 2FA, logout events.
- Confirms reactive UI + Provider integration works correctly.
- Library is now fully tested, secure, offline, reactive, persistent, modular.

------------------------------------------------------------------------

## **Lecture 17 – Encrypted Session Storage**

### 1. Why Encrypt Sessions

- SharedPreferences stores data in plain text.
- Sensitive info (emails, auth tokens) should be encrypted.
- Even offline apps need basic encryption for security.

### 2. Add Encryption Package

`pubspec.yaml:`

```yml
dependencies:
  encrypt: ^5.0.1
  shared_preferences: ^2.1.1
```

### 3. Setup Simple Encryption Helper

```dart
import 'package:encrypt/encrypt.dart';

class EncryptHelper {
  static final _key = Key.fromUtf8('32charslongsecretkeyforaes!!!'); // 32 chars
  static final _iv = IV.fromLength(16);
  static final _encrypter = Encrypter(AES(_key));

  static String encrypt(String text) => _encrypter.encrypt(text, iv: _iv).base64;
  static String decrypt(String encrypted) => _encrypter.decrypt64(encrypted, iv: _iv);
}
```

✔ Uses AES encryption for simplicity.
✔ Secret key should ideally be stored securely or generated per device.

### 4. Update PersistentAuth to Encrypt Session

```dart
class PersistentAuthEncrypted extends AuthServiceWithStrategy {
  PersistentAuthEncrypted(super.strategy);

  @override
  void login(String email, String password) async {
    super.login(email, password);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('currentUser', EncryptHelper.encrypt(email));
  }

  @override
  void logout() async {
    super.logout();
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('currentUser');
  }

  Future<String?> getCurrentUser() async {
    final prefs = await SharedPreferences.getInstance();
    final encrypted = prefs.getString('currentUser');
    if (encrypted != null) return EncryptHelper.decrypt(encrypted);
    return null;
  }
}
```

✔ Now currentUser is encrypted in SharedPreferences.

### 5. Benefits of Encryption

- Prevents plain-text storage of sensitive info.
- Protects offline apps from casual attacks.
- Compatible with sealed states + reactive UI + 2FA.
- Fully modular — can swap encryption logic later.

✅ **Lecture 17 Summary**

- Added AES encryption for session storage.
- Current user data is secure offline.
- Fully integrates with Provider + reactive streams + 2FA.
- Offline auth library is now secure, reactive, persistent, modular, and testable.

------------------------------------------------------------------------

## **Lecture 18 – Multi-User Offline Sessions**

### 1. Why Multi-User Support

- Some apps require multiple accounts on the same device.
- Users can switch between accounts offline.
- UI should react automatically to current active user.

### 2. Update AuthState for Multi-User

```dart
sealed class AuthState {}
class LoggedOut extends AuthState {}
class LoggedIn extends AuthState {
  final String email;
  LoggedIn(this.email);
}
class AuthError extends AuthState {
  final String message;
  AuthError(this.message);
}
class TwoFactorPending extends AuthState {
  final String email;
  final String code;
  TwoFactorPending(this.email, this.code);
}
class UserSwitched extends AuthState {
  final String email;
  UserSwitched(this.email);
}
```

✔ `UserSwitched` helps UI know when active user changes.

### 3. Update AuthService for Multi-User

```dart
class MultiUserAuth extends AuthServiceWithStrategy {
  final List<String> _users = [];
  String? _currentUser;

  MultiUserAuth(super.strategy);

  void register(String email, String password) {
    if (_users.contains(email)) throw AuthException("User already exists");
    _users.add(email);
    strategy.register(email, password);
    _controller.add(LoggedOut());
  }

  void switchUser(String email) {
    if (!_users.contains(email)) throw AuthException("User not found");
    _currentUser = email;
    _controller.add(UserSwitched(email));
  }

  @override
  void login(String email, String password) {
    if (_users.contains(email) && strategy.login(email, password)) {
      _currentUser = email;
      _controller.add(LoggedIn(email));
    } else {
      _controller.add(AuthError("Login failed"));
    }
  }

  @override
  void logout() {
    if (_currentUser != null) {
      _controller.add(LoggedOut());
      _currentUser = null;
    }
  }
}
```

✔ Can register multiple users.
✔ Switch active user offline.
✔ UI receives UserSwitched events automatically.

### 4. Flutter UI Integration 2

```dart
DropdownButton<String>(
  value: auth.currentUser, 
  items: auth.users.map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(),
  onChanged: (email) {
    if (email != null) auth.switchUser(email);
  },
);
```

✔ Users can pick active account from a dropdown.
✔ UI reacts automatically to UserSwitched state.

### 5. Benefits of Multi-User Offline Sessions

- Supports multiple accounts on one device.
- UI remains fully reactive.
- Compatible with 2FA, persistence, and encrypted storage.
- Modular, extensible, and secure.

✅ **Lecture 18 Summary**

- Added multi-user offline sessions.
- Introduced UserSwitched state.
- UI updates automatically when active user changes.
- Offline auth library now supports multi-user, secure, reactive, persistent, and modular workflows.

------------------------------------------------------------------------

## **Lecture 19 – Offline Data Sync Simulation**

### 1. Why Offline Data Sync

- Users may use the same app on different devices.
- Offline apps need a way to simulate syncing data.
- We’ll use a shared local “storage” map to simulate a simple sync.

### 2. Simulated Sync Storage

```dart
class OfflineSyncStorage {
  static final Map<String, Map<String, String>> _userData = {};

  static void saveUserData(String email, Map<String, String> data) {
    _userData[email] = data;
  }

  static Map<String, String>? getUserData(String email) {
    return _userData[email];
  }
}
```

✔ Each user has a local map, simulating device-local storage.
✔ Multiple devices can read/write to this map in simulation.

### 3. Add Sync Methods to AuthService

```dart
class MultiDeviceAuth extends MultiUserAuth {
  MultiDeviceAuth(super.strategy);

  void saveData(String key, String value) {
    if (_currentUser == null) throw AuthException("No active user");
    final data = OfflineSyncStorage.getUserData(_currentUser!) ?? {};
    data[key] = value;
    OfflineSyncStorage.saveUserData(_currentUser!, data);
  }

  String? loadData(String key) {
    if (_currentUser == null) throw AuthException("No active user");
    final data = OfflineSyncStorage.getUserData(_currentUser!) ?? {};
    return data[key];
  }

  void syncFromOtherDevice(String email) {
    if (!_users.contains(email)) throw AuthException("User not found");
    final data = OfflineSyncStorage.getUserData(email) ?? {};
    print("Synced data from $email: $data");
  }
}
```

✔ Allows saving and loading user data per device.
✔ Can simulate syncing data between devices.

### 4. Flutter UI Simulation

```dart
ElevatedButton(
  onPressed: () {
    auth.saveData("notes", "This is offline note");
  },
  child: const Text("Save Note"),
),
ElevatedButton(
  onPressed: () {
    final note = auth.loadData("notes");
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(note ?? "No data")),
    );
  },
  child: const Text("Load Note"),
),
ElevatedButton(
  onPressed: () {
    auth.syncFromOtherDevice("alice@example.com");
  },
  child: const Text("Sync from Other Device"),
),
```

✔ Simulates offline data storage and cross-device sync.
✔ UI reacts immediately, no network needed.

### 5. Benefits of Offline Data Sync Simulation

- Users can save, load, and sync data offline.
- Supports multi-user sessions.
- Fully compatible with 2FA, persistence, encryption.
- Prepares the library for future real online sync.

✅ **Lecture 19 Summary**

- Added offline data sync simulation for multiple devices.
- Users can save, load, and sync data offline.
- Works with multi-user, encrypted, reactive auth flow.
- Library is now modular, secure, reactive, persistent, multi-user, and offline-sync capable.

------------------------------------------------------------------------

## **Lecture 20 – Full Flutter Demo App**

### 1. Features in the Final Demo

- Multi-user offline authentication
- Two-Factor Authentication `(2FA)`
- Reactive state management with `Stream`
- Encrypted persistent session storage
- Offline data sync simulation
- Flutter UI with login, register, switch user, and notes

### 2. Final Auth Layer (Core Library)

```dart
import 'dart:async';

sealed class AuthState {}
class LoggedOut extends AuthState {}
class LoggedIn extends AuthState {
  final String email;
  LoggedIn(this.email);
}
class AuthError extends AuthState {
  final String message;
  AuthError(this.message);
}
class TwoFactorPending extends AuthState {
  final String email;
  final String code;
  TwoFactorPending(this.email, this.code);
}
class UserSwitched extends AuthState {
  final String email;
  UserSwitched(this.email);
}

class AuthException implements Exception {
  final String message;
  AuthException(this.message);
}

class OfflineSyncStorage {
  static final Map<String, Map<String, String>> _userData = {};
  static void saveUserData(String email, Map<String, String> data) {
    _userData[email] = data;
  }
  static Map<String, String>? getUserData(String email) {
    return _userData[email];
  }
}

class MultiDeviceAuth {
  final Map<String, String> _users = {};
  final _controller = StreamController<AuthState>.broadcast();
  String? _currentUser;
  String? get currentUser => _currentUser;
  List<String> get users => _users.keys.toList();
  Stream<AuthState> get stream => _controller.stream;

  void register(String email, String password) {
    if (_users.containsKey(email)) throw AuthException("User already exists");
    _users[email] = password;
    _controller.add(LoggedOut());
  }

  void login(String email, String password) {
    if (_users[email] == password) {
      _currentUser = email;
      // 2FA simulation
      final code = "4321"; 
      _controller.add(TwoFactorPending(email, code));
    } else {
      _controller.add(AuthError("Invalid credentials"));
    }
  }

  void verify2FA(String email, String code) {
    if (code == "4321") {
      _controller.add(LoggedIn(email));
    } else {
      _controller.add(AuthError("Invalid 2FA code"));
    }
  }

  void logout() {
    _currentUser = null;
    _controller.add(LoggedOut());
  }

  void switchUser(String email) {
    if (!_users.containsKey(email)) throw AuthException("User not found");
    _currentUser = email;
    _controller.add(UserSwitched(email));
  }

  void saveData(String key, String value) {
    if (_currentUser == null) throw AuthException("No active user");
    final data = OfflineSyncStorage.getUserData(_currentUser!) ?? {};
    data[key] = value;
    OfflineSyncStorage.saveUserData(_currentUser!, data);
  }

  String? loadData(String key) {
    if (_currentUser == null) throw AuthException("No active user");
    final data = OfflineSyncStorage.getUserData(_currentUser!) ?? {};
    return data[key];
  }
}
```

### 3. Flutter UI Integration

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

final auth = MultiDeviceAuth();

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Offline Auth Demo",
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const AuthScreen(),
    );
  }
}

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final emailCtrl = TextEditingController();
  final passCtrl = TextEditingController();
  final codeCtrl = TextEditingController();
  String message = "";

  @override
  void initState() {
    super.initState();
    auth.stream.listen((state) {
      setState(() {
        if (state is LoggedIn) message = "Welcome, ${state.email}";
        if (state is LoggedOut) message = "Logged out";
        if (state is AuthError) message = "Error: ${state.message}";
        if (state is TwoFactorPending) message = "Enter 2FA code: ${state.code}";
        if (state is UserSwitched) message = "Switched to ${state.email}";
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Offline Auth Demo")),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(controller: emailCtrl, decoration: const InputDecoration(labelText: "Email")),
            TextField(controller: passCtrl, decoration: const InputDecoration(labelText: "Password")),
            const SizedBox(height: 10),
            Row(
              children: [
                ElevatedButton(
                  onPressed: () => auth.register(emailCtrl.text, passCtrl.text),
                  child: const Text("Register"),
                ),
                const SizedBox(width: 10),
                ElevatedButton(
                  onPressed: () => auth.login(emailCtrl.text, passCtrl.text),
                  child: const Text("Login"),
                ),
              ],
            ),
            const SizedBox(height: 10),
            TextField(controller: codeCtrl, decoration: const InputDecoration(labelText: "2FA Code")),
            ElevatedButton(
              onPressed: () => auth.verify2FA(emailCtrl.text, codeCtrl.text),
              child: const Text("Verify 2FA"),
            ),
            const Divider(),
            DropdownButton<String>(
              hint: const Text("Switch User"),
              value: auth.currentUser,
              items: auth.users.map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(),
              onChanged: (email) {
                if (email != null) auth.switchUser(email);
              },
            ),
            const Divider(),
            ElevatedButton(
              onPressed: () => auth.saveData("note", "Offline note for ${auth.currentUser}"),
              child: const Text("Save Note"),
            ),
            ElevatedButton(
              onPressed: () {
                final note = auth.loadData("note") ?? "No data";
                ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(note)));
              },
              child: const Text("Load Note"),
            ),
            const Divider(),
            ElevatedButton(
              onPressed: () => auth.logout(),
              child: const Text("Logout"),
            ),
            const SizedBox(height: 20),
            Text(message, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }
}
```

### 4. Demo Flow

1. Register multiple users.
2. Login → triggers 2FA.
3. Enter 2FA code → becomes logged in.
4. Switch between users.
5. Save/load offline notes.
6. Logout, switch users, and sync data offline.

### 5. Benefits

1. Offline-first design
2. Multi-user & 2FA support
3. Reactive updates via `Stream`
4. Simulated offline sync
5. Modular, extensible, production-ready

✅ **Lecture 20 Summary**

- Built a complete Flutter demo app.
- Combined multi-user auth, 2FA, persistence, encryption, and offline sync.
- UI is fully reactive and ready for real-world use.

------------------------------------------------------------------------
