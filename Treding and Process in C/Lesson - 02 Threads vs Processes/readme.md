# 🧠 Understanding Processes and Threads in C

---

## 🔹 Processes

A **process** is an independent program in execution. It is the **smallest unit of execution** managed by the operating system. Each process runs in its own **memory space** and has dedicated system resources.

---

### ✅ Key Concepts About Processes

#### 1. **Process Creation**

- A new process is created when you run a program or application.
- Common system calls for process creation:
  - Unix/Linux: `fork()`
  - Windows: `CreateProcess()`

#### 2. **Process Components**

- **Program Counter (PC):** Stores the address of the next instruction.
- **Registers:** Store temporary values and CPU state.
- **Memory Space:** Contains the executable code, stack, heap, and global variables.
- **File Descriptors:** Handle open files, sockets, etc.
- **Process Identifier (PID):** Unique number assigned by the OS to identify each process.

#### 3. **Process States**

- **Running:** Actively executing instructions.
- **Blocked:** Waiting for I/O or an event.
- **Ready:** Ready to execute when CPU becomes available.
- **Terminated:** Execution is complete.

#### 4. **Process Control Block (PCB)**

- A PCB is a data structure used by the OS to store process information, such as:
  - Process state
  - Program counter
  - Registers
  - Memory usage

---

#### 💡 Example: Creating a Process with `fork()`

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    pid_t pid = fork();

    if (pid == -1) {
        perror("Error in fork");
        return 1;
    } else if (pid == 0) {
        // Code for the child process
        printf("Child process: My PID is %d\n", getpid());
    } else {
        // Code for the parent process
        printf("Parent process: Child's PID is %d\n", pid);
    }

    // Code executed by both parent and child
    printf("This code is executed by both parent and child processes\n");

    return 0;
}
```

#### 🖥️ Output 1

```text
Parent process: Child's PID is 12345
This code is executed by both parent and child processes
Child process: My PID is 12345
This code is executed by both parent and child processes
```

---

## 🔹 Threads

A **thread** is the smallest unit of execution within a process. Unlike processes, threads share the same memory space, allowing for lightweight concurrent execution.

### ✅ Key Concepts About Threads

#### 1. **Thread Creation**

Threads are created inside a process using system calls like:

- `POSIX`: `pthread_create()`
- `Windows`: `CreateThread()`

Threads share code, data, and open files, but each thread has its own stack and registers.

#### 2. **Thread Components**

- **Program Counter (PC)**: Points to the current instruction.
- **Registers**: Contain thread-specific execution data.
- **Stack**: Stores local variables and function calls.
- **Thread Identifier (TID)**: Unique thread ID within the process.

#### 3. **Thread States**

- **Running**: Currently executing.
- **Blocked**: Waiting for an event or I/O.
- **Ready**: Waiting to be scheduled.

#### 4. **Multithreading**

Enables multiple threads to run in the same process, improving concurrency and performance.
Communication between threads is easier than between processes due to shared memory.

#### 💡 Example: Creating Threads with pthread

```c
#include <stdio.h>
#include <pthread.h>

void* threadFunction(void* arg) {
    int thread*id = *((int\_)arg);
    printf("Thread %d is running.\n", thread_id);
    pthread_exit(NULL);
}

int main() {
    pthread_t threads[3];
    int thread_ids[3] = {1, 2, 3};

    // Create 3 threads
    for (int i = 0; i < 3; i++) {
        if (pthread_create(&threads[i], NULL, threadFunction, (void*)&thread_ids[i]) != 0) {
            perror("Error creating thread");
            return 1;
        }
    }

    // Wait for all threads to complete
    for (int i = 0; i < 3; i++) {
        if (pthread_join(threads[i], NULL) != 0) {
            perror("Error joining thread");
            return 1;
        }
    }

    printf("All threads have finished.\n");
    return 0;

}
```

#### 🖥️ Output 2

```text
Thread 1 is running.
Thread 2 is running.
Thread 3 is running.
All threads have finished.
```

## 📌 Summary: Threads

- Threads are lightweight, faster to create, and more memory-efficient than processes.
- Threads within the same process can share data easily, but must handle synchronization issues (e.g., race conditions).
- Used in applications where parallelism or responsiveness is critical (e.g., servers, UI apps, simulations).

## ✅ Final Comparison: Processes vs Threads

| Feature         | Process              | Thread               |
| --------------- | -------------------- | -------------------- |
| Memory          | Separate             | Shared               |
| Overhead        | High                 | Low                  |
| Communication   | Complex (IPC needed) | Easy (shared memory) |
| Isolation       | Fully isolated       | Not isolated         |
| Creation Time   | Slower               | Faster               |
| Fault Isolation | Better               | Weaker               |
