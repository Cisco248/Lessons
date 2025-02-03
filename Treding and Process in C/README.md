# Threading Using C Language
## _Cisco Sample Coding_

> These is the Threads and Process Diffreance and Thier Roles, etc...

### You Need to Install C Language on your Computer
### [ Follow These Steps ]

- C/C++ for Visual Studio Code
C/C++ support for Visual Studio Code is provided by a Microsoft C/C++ extension to enable cross-platform C and C++ development on Windows, Linux, and macOS.
When you create a *.cpp file, the extension adds features such as syntax highlighting (colorization), smart completions and hovers (IntelliSense), and error checking.

# Install the extension

1. Open VS Code.
2. Select the Extensions view icon on the Activity bar or use the keyboard shortcut (Ctrl+Shift+X).
3. Search for 'C++'.
4. Select Install.

- Common compilers that already come preinstalled on some platforms are the GNU Compiler Collection (GCC) on Linux and the Clang tools with Xcode on macOS.To check if you already have them installed:

    1. Open a new VS Code terminal window using (Ctrl+Shift+`)
    2. Use the following command to check for the GCC compiler g++:
   
```g++ --version```

Or this command for the Clang compiler clang:

```clang --version```

> The output should show you the compiler version and details. If neither are found, make sure your compiler executable is in your platform path (`%PATH` on `Windows`, `$PATH` on `Linux and macOS`) so that the `C/C++ extension` can find it. 
Otherwise, use the instructions in the section below to install a compiler.

# Install a Compiler

> To understand the process, let's install `Mingw-w64` via `MSYS2`. Mingw-w64 is a popular, free toolset on Windows. 
It provides up-to-date native builds of `GCC`, `Mingw-w64`, and other helpful `C++ tools` and `libraries`.

1. Download using this direct link to the MinGW installer.

2. Run the installer and follow the steps of the installation wizard. Note, MSYS2 requires 64 bit Windows 8.1 or newer.

3. In the wizard, choose your desired Installation Folder. Record this directory for later. In most cases, the recommended directory is acceptable. The same applies when you get to setting the start menu shortcuts step. When complete, ensure the Run MSYS2 now box is checked and select Finish. A MSYS2 terminal window will then automatically open.

4. In this terminal, install the MinGW-w64 toolchain by running the following command:
   
    ```pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain```

5. Accept the default number of packages in the `toolchain` group by pressing `Enter`.

6. Enter `Y` when prompted whether to proceed with the installation.

7. Add the path to your MinGW-w64 bin folder to the Windows PATH environment variable by using the following steps:

    - In the `Windows search bar`, type `Settings` to open your `Windows Settings`.
    - Search for Edit environment variables for your account.
    - In your User variables, select the Path variable and then select Edit.
    - Select New and add the MinGW-w64 destination folder you recorded during the installation process to the list. If you selected the default installation steps, the path is: `C:\msys64\ucrt64\bin`.
    - Select `OK` to `save` the updated `PATH`. For the `new PATH` to be available, `reopen` your `console windows`.

8. Check that your `MinGW-w64` tools are correctly installed and available, open a new `Command Prompt` and type:
    ```sh
    gcc --version
    g++ --version
    gdb --version
    ```

# Create a C++ file

On Windows, launch a `Windows command prompt` (Enter Windows command prompt in the Windows search bar). On macOS and Linux, you can enter these commands in the terminal.
Run the following commands. They are creating an empty folder called `projects` where you can place all your `VS Code projects`. The next commands create and navigate you to a `subfolder` called `******`. From there, you are opening `*******` directly in `VS Code` using the code command.

  ```sh
      mkdir projects
      cd projects
      mkdir helloworld
      cd helloworld
  ```

## Sample Lists

1. Lesson - 01 Sample Threads
2. Lesson - 02 Threads vs Proccesses
3. Lesson - 03 Race Condition
4. Lesson - 04 Mutex
5. Lesson - 05 Threads in Loop
6. Lesson - 06 Thread Join
7. Lesson - 07 Pass Argument
8. Lesson - 08 Example
9. Lesson - 09 Between Trylock and Lock
10. Lesson - 10 Condition Variables
11. Lesson - 11 Example for Trylock
12. Lesson - 12 pthread_exit
13. Lesson - 13 pthread_barrier
14. Lesson - 14 Example for Barrier
15. Lesson - 15 pthread_t
16. Lesson - 16 Detached Threads
17. Lesson - 17 Recursive Mutexes 
18. Lesson - 18 Deadlocks
19. Lesson - 19 Semaphores
20. Lesson - 20 Process Synchronization
21. Lesson - 01 Sample Threads

