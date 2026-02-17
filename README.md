ShiftZen - Intercom Triage & AI Assistant

ShiftZen is a browser extension designed to streamline support workflow within Intercom. It helps leads and agents triage tickets to specific shifts, manage agent rosters, and draft AI-powered replies directly inside the Intercom interface.

## 📂 Project Structure

Ensure your folder hierarchy looks like this before installing:

```text
ShiftZen/
│
├── manifest.json        
├── content.js           
├── panel.css            
├── background.js        
└── icons/               
    ├── icon16.png
    ├── icon48.png
    └── icon128.png

```

---

## 🚀 How to Install

### On Google Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Toggle **Developer mode** in the top-right corner.
3. Click the **Load unpacked** button in the top-left.
4. Select the **ShiftZen** folder (the folder containing `manifest.json`).
5. The extension is now installed! You should see the ShiftZen icon in your toolbar.

### On Microsoft Edge

1. Open Edge and navigate to `edge://extensions/`.
2. Toggle **Developer mode** in the left sidebar (or via the toggle switch).
3. Click **Load unpacked**.
4. Select the **ShiftZen** folder.
5. The extension is active.

---

## 💡 How to Use

Once installed, open **Intercom** (`app.intercom.com`). You will see a small **"S"** button in the top header bar of your inbox. Click it to toggle the ShiftZen panel.

### 1. **◎ Triage Tab**

* **Auto-Detect:** Click the **↻** button to detect which Team Inbox the current ticket belongs to.
* **Assign:** The tool calculates the next agent in line based on the shift roster and ticket counts. Click **Assign** to route the ticket to them.
* **Skip:** If the recommended agent shouldn't take this ticket, click **Skip**.
* **Manual Override:** Use the "✋" icon in the header to manually pick an agent.

### 2. **☷ Roster Tab**

* **View Active Agents:** See who is currently working (e.g., Shift 1, Shift 4).
* **Filter:** Use the search bar to find specific agents.
* **Check In/Out:** Uncheck the box next to an agent's name to temporarily remove them from the queue (e.g., if they are on break).

### 3. **✨ AI Tab (New!)**

This tab uses the internal Zeenie LLM to draft replies based on the ticket history.

* **Setup (First Time Only):**
1. Go to the **AI** tab.
2. Paste your **Zeenie API Key** in the input field.
3. Click **Save**.


* **Generate a Reply:**
1. Open a ticket in Intercom.
2. In the "Draft" box, type a short instruction (e.g., *"Tell them to clear cache and retry"* or just *"Draft a polite reply"*).
3. Select a **Tone** (Formal, Friendly, Concise).
4. Click **✨ Generate Draft**.


* **Use the Draft:**
* Once the reply is generated, click **Insert into Chat ↵**.
* The text will appear in your Intercom reply box, ready for you to review and send.



### 4. **⚙ Settings Tab**

* **Manage Agents:** Add new agents or edit existing ones (change shifts or skill bins).
* **Backup:** Click **Download JSON** to save your current roster and queue state.
* **Restore:** Use **Import** to load a previously saved roster configuration.
* **Reset:** Use **Clear & Reset** to wipe daily ticket counts and start fresh (e.g., at the start of a new day).
