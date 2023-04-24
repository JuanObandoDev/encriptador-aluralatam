# Description

This project is an application that uses structures JSX, CSS and Javascript with the React framework, to encrypt and decrypt text. Encryption is done by replacing vowels with words according to a specific set of rules. The application only accepts lowercase letters and accents and special characters are not allowed.

The web page has fields so that the user can enter the text to be encrypted or decrypted and select the corresponding option. The result of the operation is displayed on the screen and there is the option to copy the encrypted or decrypted text to the clipboard using a "copy" button.

# Dictionaries

## Encryption dictionary

| Key | Value |
| --- | ----- |
| e   | enter |
| i   | imes  |
| a   | ai    |
| o   | ober  |
| u   | ufat  |

---

## Decryption dictionary

| Key   | Value |
| ----- | ----- |
| enter | e     |
| imes  | i     |
| ai    | a     |
| ober  | o     |
| ufat  | u     |

# Requirements

- Must work only with lowercase letters
- Letters with accents or special characters should not be used
- It should be possible to convert a word to the encrypted version also to return an encrypted word to its original version. (e.g. "cat" => "cait" | "cait" => "cat")
- The page must have fields for
  insertion of the text that will be encrypted or decrypted, and the user must be able to choose between the two options.
- The result must be displayed on the screen.
- A button that copies the encrypted/decrypted text for the transfer section, that is, it has the same functionality as ctrl+C or the "copy" option from the applications menu.
