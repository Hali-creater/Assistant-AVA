# Lawsuit Questionnaire AI Agent

This is a self-contained, serverless AI agent that functions as a lawsuit questionnaire. It can be embedded on a law firm's website to automate the initial client intake process.

## How it Works

The agent is built with HTML, CSS, and JavaScript and runs entirely in the user's web browser. It asks a series of predefined questions and then submits the answers to a designated email address using Formspree.

## One-Time Setup for the Owner

To receive the questionnaire submissions, you need to set up a free Formspree account and add your unique Formspree URL to the `script.js` file. This is a one-time setup that takes about two minutes.

### Step 1: Create a Formspree Account

1.  Go to [formspree.io](https://formspree.io/) and sign up for a free account.
2.  Create a new form and give it a name (e.g., "Lawsuit Questionnaire").
3.  Formspree will provide you with a unique URL for your form. It will look something like this: `https://formspree.io/f/YOUR_UNIQUE_ID`.

### Step 2: Add the URL to the `script.js` File

1.  Open the `script.js` file in a text editor.
2.  Find the following line of code:

    ```javascript
    const formspreeURL = "https://formspree.io/f/YOUR_UNIQUE_ID";
    ```

3.  Replace `"https://formspree.io/f/YOUR_UNIQUE_ID"` with your unique Formspree URL.
4.  Save the file.

That's it! Your agent is now ready to receive submissions.
