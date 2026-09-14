const fs = require("fs");

const fileName = "data.txt";

console.log("Starting file operations...");

// CREATE
fs.writeFile(fileName, "Hello from Smart Utility Toolkit!\n", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully.");

    // READ
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File content:");
        console.log(data);

        // UPDATE
        fs.appendFile(fileName, "This is updated content.\n", (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File updated successfully.");

            // READ AGAIN
            fs.readFile(fileName, "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }

                console.log("Updated file content:");
                console.log(data);

                // DELETE
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("File deleted successfully.");
                    console.log("All file operations completed.");
                });
            });
        });
    });
});