# 🧵 Threading Using C Language

## _Cisco Sample Coding_

> A practical introduction to threading, its differences with processes, and synchronization mechanisms using the C language.

---

## 📦 Installation Requirements

Before running any threading code in C, ensure the following are installed and configured:

### ✅ Install C Compiler (MinGW-w64 via MSYS2)

> **MinGW-w64** gives you the GCC compiler with pthread support on Windows.

1. **Download MSYS2**
   Get it from [https://www.msys2.org](https://www.msys2.org)

2. **Install MSYS2**
   Follow the installer steps. Recommended path: `C:\msys64`

3. **Open MSYS2 terminal** and install the toolchain:

   ```sh
   pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
   ```

4. **Update Windows Environment Path**

   - Add this to the User Path variable:

   ```makefile
   C:\msys64\ucrt64\bin
   ```

5. **Verify installation**

   ```sh
   gcc --version
   g++ --version
   gdb --version
   ```

## 💻 Set Up Visual Studio Code

1. Download Visual Studio Code from [the official Visual Studio Code website](https://code.visualstudio.com)

2. Install C/C++ Extension
   - Open VS Code
   - Press Ctrl+Shift+X (Extensions)
   - Search for: C/C++
   - Install the Microsoft C/C++ extension

## 📁 Create Your Project Folder

Open a terminal or command prompt and run:

```sh
mkdir projects
cd projects
mkdir helloworld
cd helloworld
```

Open the folder in VS Code:

```sh
code .
```

Create a new file named: `main.c`

### ✅ Sample Code: Basic Thread

```c
#include <stdio.h>
#include <pthread.h>

void* thread_function(void* arg) {
    printf("Hello from the thread!\n");
    return NULL;
}

int main() {
    pthread_t thread;
    pthread_create(&thread, NULL, thread_function, NULL);
    pthread_join(thread, NULL);
    printf("Hello from the main thread!\n");
    return 0;
}
```

## ⚙️ Compile & Run

In the terminal (`ucrt64` or `Terminal`):

```sh
gcc main.c -o main -lpthread
./main
```

Expected Output:

```css
Hello from the thread!
Hello from the main thread!
```

## 🧪 Lesson Index: Cisco Samples

### Tables of Lessons

- [01 Sample Threads Basic thread usage](./Lesson%20-%2001%20Sample%20Threads/)
- [02 Threads vs Processes Differences between thread and process](./Lesson%20-%2002%20Threads%20vs%20Processes/)
- [03 Race Condition Access conflict over shared memory](./Lesson%20-%2003%20Race%20Condition/)
- [04 Mutex Locking mechanism to prevent conflicts](./Lesson%20-%2004%20Mutex/)
- [05 Threads in Loop Creating multiple threads in loop](./Lesson%20-%2005%20Thread%20in%20Loop/)
- [06 Thread Join Waiting for threads to finish](./Lesson%20-%2006%20Thread%20Join/)
- [07 Pass Argument Sending data to threads](./Lesson%20-%2007%20Pass%20Argument/)
- [08 Example Combined usage example](./Lesson%20-%2008%20Example/)
- [09 Trylock vs Lock Non-blocking vs. blocking locks](./Lesson%20-%2009%20Between%20Trylock%20and%20Lock/)
- [10 Condition Variables Thread signaling and wait mechanisms](./Lesson%20-%2010%20Condition%20Variable/)
- [11 Trylock Example Practical usage of trylock](./Lesson%20-%2011%20Examples%20for%20Trylock/)
- [12 pthread_exit Graceful thread termination](./Lesson%20-%2012%20pthread_exit/)
- [13 pthread_barrier Synchronization barrier for threads](./Lesson%20-%2013%20pthread_barrier/)
- [14 Barrier Example Example use case of barriers](./Lesson%20-%2014%20%20Example%20for%20the%20Barrier/)
- [15 pthread_t Thread identifiers](./Lesson%20-%2015%20pthread_t/)
- [16 Detached Threads Threads that don't need to be joined](./Lesson%20-%2016%20Detached%20Threads/)
- [17 Recursive Mutexes Mutexes that can be relocked by same thread](./Lesson%20-%2017%20Recursive%20Mutexes/)
- [18 Deadlocks When threads are stuck waiting forever](./Lesson%20-%2018%20Deadlocks/)
- [19 Semaphores Counting locks for limited resources](./Lesson%20-%2019%20Semaphores/)
- [20 Process Synchronization Sync mechanisms between processes](./Lesson%20-%2020%20Between%20Semaphores%20and%20Mutex/)

## 📘 Notes

- Always compile thread programs with -lpthread.
- Use gdb for debugging thread execution.
- Create separate .c files for each lesson.

## 📎 Related Tools

- 🧵 POSIX Threads (pthread.h)
- 🔐 Mutex and Synchronization primitives
- 🧠 Thread-safe memory access
- 📚 Reference: <https://man7.org/linux/man-pages/dir_section_3.html>

## 🎯 End Goal

By the end of these lessons, you should:

- Understand thread creation and synchronization
- Be aware of concurrency bugs (e.g., race conditions)
- Know how to prevent deadlocks
- Apply threading to real-world C applications

## About the Lesson

```yaml
Let me know if you'd like this in a downloadable `.md` file, or want a folder structure with all `lessonXX.c` boilerplate files created for you automatically.
```
