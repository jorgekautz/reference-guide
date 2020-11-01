# Design patterns

[comment]: <> (<img align="right" src="https://camo.githubusercontent.com/cfcaf3a99103d61f387761e5fc445d9ba0203b01/68747470733a2f2f7472617669732d63692e6f72672f6477796c2f657374612e7376673f6272616e63683d6d6173746572">)

## What are design patterns?

There is one thing that is clear, no matter how specific a problem a software developer is facing is, there is a 99% chance that someone has already faced a similar problem in the past, which can be modeled from the same way.

Modeling refers to the structure of the classes that make up the solution to the problem that may already be invented, because you are solving a common problem that other people have already solved before. If the way to solve this problem can be extracted, explained and reused in multiple areas, then we are faced with a software design pattern.

## Why are design patterns useful?

It may seem silly, but if there is no use, things end up not being used. Design patterns are very useful for the following reasons:

### 1. Save you time

Anyone would love to find an ingenious solution to a problem when modeling computer system, that's normal, it happens to me too. Software development is an almost artistic process, and the mental challenge it entails reverts to enormous personal satisfaction once a good result is achieved.

But you have to be honest: always looking for a new solution to the same problems reduces the effectiveness of any developer, because you are wasting a lot of time in the process. Do not forget that software development is also engineering, and therefore in many cases there will be common rules to solve common problems.

Design patterns cut that point. Once they are known, they will be able to count on a set of well-proven rules and tools, which will allow the solution of most problems directly, without having to think about how valid they are, or if there may be a better alternative.

### 2. They help you to be sure of the validity of the code

A little related to the above, whenever something new is created, the question arises as to whether it is really coming up with the correct solution, or if there will really be a better answer. And this is a very reasonable doubt and that in many cases the answer is not the desired one: there is a more optimal solution, and valuable time has been lost in implementing something that, although it works, could have been better modeled.

Design patterns are structures that have been tested by millions of developers over many years, so if you choose the right pattern to model the problem, you can be sure that it will be one of the most valid solutions (if not the most) that can be found.

### 3. They establish a common language

All other reasons pale in front of this one. Modeling a code using patterns helps to explain to other people, regardless of whether they know the code or not, to understand how a problem has been tackled. It also helps other developers to understand what has been implemented, how and why, and also to quickly discover if that was the best solution or not.

But it also serves to sit down with other colleagues to think about how to solve something, and agree much faster, explain more easily what their ideas are and that the rest understand without any problem. The design patterns will help you and your team, ultimately, to move forward much faster, with a code that is easier for everyone to understand and much more robust.

## How do you identify which pattern fits a problem?

Unfortunately, there is bad news… This is the most difficult point, and the most obvious answer, which is also the one we like least, is that you learn by doing. Experience is the only valid way to become more adept at detecting where design patterns can help.

Of course, there are known situations in which one employer or another can help, and they will be discussed throughout the articles. It is also recommended that you read the Head First [Design Patterns](https://drive.google.com/file/d/1HyBSWiaL4Treg7ggJ8ZhRh4eXUsFJokl/view?usp=sharing) book, in which, in addition to explaining the patterns in a very entertaining way, it explains very well how to use them in real life.

## List of design patterns

This is the list of the most popular design patterns. These are divided into different groups according to the type of problem they solve.

### Creational patterns

They are the ones that facilitate the task of creating new objects, in such a way that the creation process can be decoupled from the implementation of the rest of the system.

Creational patterns are based on two concepts: Encapsulate knowledge about the specific types that the system uses. These patterns usually work with interfaces, so the specific implementation that is used is isolated. And hide how concrete implementations need to be created and how they are combined with each other.

The best known creational patterns are:
* [Abstract Factory](patterns/creational/abstract-factory-en.md): It provides an interface that delegates the creation of a set of related objects without the need to specify at any time which are the specific implementations.
* [Factory Method](patterns/creational/factory-method-en.md): Expose a creation method, delegating the implementation of this method to subclasses.
* [Builder](patterns/creational/builder-en.md): It separates the creation of a complex object from its structure, so that the same construction process can be used to create different representations.
* [Singleton](patterns/creational/singleton-en.md): It limits the number of possible instances of a class in the program to one, and provides global access to it.
* [Prototype](patterns/creational/prototype-en.md): It allows the creation of objects based on "templates". A new object is created from the cloning of another object.

### Structural patterns

They are patterns that facilitate software modeling by specifying the way in which some classes are related to others.

The best known structural patterns are:
* [Adapter](patterns/structural/adapter-en.md): It allows two classes with different interfaces to work between them, through an intermediate object with which they communicate and interact.
* [Bridge](patterns/structural/bridge-en.md): Decouples an abstraction from your implementation, so the two can evolve independently.
* [Composite](patterns/structural/composite-en.md): It facilitates the creation of tree object structures, where all the elements use the same interface. Each of them can in turn contain a list of those objects, or be the last one in that branch.
* [Decorator](patterns/structural/decorator-en.md): It allows adding extra functionality to an object (dynamically or statically) without modifying the behavior of other objects of the same type.
* [Facade](patterns/structural/facade-en.md): A facade is an object that creates a simplified interface to deal with another more complex piece of code, in a way that simplifies and isolates its use. An example could be creating a facade to deal with a class from an external library.
* [Flyweight](patterns/structural/flyweight-en.md): A large number of objects share the same object with common properties in order to save memory.
* [Proxy](patterns/structural/proxy-en.md): It is a class that works as an interface to anything else: an Internet connection, a file on disk, or any other resource that is expensive or impossible to duplicate.

### Behavior patterns

In this last group, most of the patterns are found, and they are used to manage algorithms, relationships and responsibilities between objects.

The behavior patterns are:
* [Command](patterns/behavior/command.md): They are objects that encapsulate an action and the parameters they need to execute.
* [Chain of responsibility](patterns/behavior/chain-of-responsibility.md): Avoid coupling to the sender and receiver of a request giving the possibility to several receivers to consume it. Each receiver has the option of consuming that request or passing it on to the next one in the chain.
* [Interpreter](patterns/behavior/interpreter.md): Defines a representation for a grammar as well as the mechanism to evaluate it. The language syntax tree is typically modeled using the Composite pattern.
* [Iterator](patterns/behavior/iterator.md): It is used to be able to move through the elements of a set sequentially without the need to expose their specific implementation.
* [Mediator](patterns/behavior/mediator.md): An object that encapsulates how another set of objects interact and communicate with each other.
* [Memento](patterns/behavior/memento.md): Grants the ability to restore an object to a previous state.
* [Observer](patterns/behavior/observer.md): Objects are able to subscribe to a series of events that another target is going to broadcast, and they will be notified when this occurs.
* [State](patterns/behavior/state.md): Allows you to modify the way an object behaves at run time, based on its internal state.
* [Strategy](patterns/behavior/strategy.md): It allows the selection of the algorithm that executes a certain action at runtime.
* [Template Method](patterns/behavior/template-method.md): Specifies the skeleton of an algorithm, allowing subclasses to define how they implement actual behavior.
* [Visitor](patterns/behavior/visitor.md): Allows you to separate the algorithm from the data structure that will be used to execute it. In this way, new operations can be added to these structures without having to modify them.
