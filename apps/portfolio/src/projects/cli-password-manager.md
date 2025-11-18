---
title: 'CLI Password Manager'
slug: 'cli-password-manager'
description: 'A command-line password manager built with Python that uses strong encryption to securely store and manage user passwords.'
href: 'https://github.com/mohithbuilds/password_manager'
linkTitle: 'View on GitHub'
gitHubLink: 'https://github.com/mohithbuilds/password_manager'
client: 'Personal'
type: 'cli'
keyFeatures:
  - 'Secure password storage using encryption'
  - 'Master password with salting for key derivation'
  - 'Command-line interface for saving and viewing passwords'
  - 'Copies passwords to clipboard for ease of use'
technologies: ['Python', 'Cryptography', 'CustomTkinter', 'Pyperclip']
images: []
featured: true
order: 5
---

This project is a robust command-line interface (CLI) password manager developed in Python, designed for secure storage and easy management of user credentials.

## Key Features

- **Secure Encryption:** Utilizes the `cryptography` library to ensure all stored passwords are encrypted, providing a high level of security.
- **Master Password Protection:** A single master password is used to derive an encryption key, enhanced with salting to protect against common attacks.
- **Command-Line Interface:** Provides a straightforward and efficient command-line interface for users to interact with the password manager, allowing them to save new credentials and retrieve existing ones.
- **Clipboard Integration:** Integrates with `pyperclip` to allow for easy copying of retrieved passwords to the clipboard, enhancing usability while maintaining security.
- **Database Storage:** Passwords are securely stored in a local database, managed through `database.py`.

## Technical Implementation

The project is primarily implemented in **Python**, leveraging several key libraries:
- **`cryptography`**: For robust encryption and decryption of sensitive password data.
- **`pyperclip`**: For cross-platform clipboard operations.
- **`customtkinter`**: (Note: While `customtkinter` is listed as a dependency, the `main.py` provided indicates a CLI application. This dependency might be for a planned GUI or an alternative entry point not currently in `main.py`.)
- **Modular Design**: The application is structured with separate modules for key derivation (`derive_key.py`), database operations (`database.py`), and the main application logic (`main.py`), promoting maintainability and clarity.
