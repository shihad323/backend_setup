"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app")); // ✅ import the app here
dotenv_1.default.config();
const app = (0, express_1.default)();
let server;
const startServer = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || "";
        const port = process.env.PORT || 5000;
        if (!mongoUri) {
            throw new Error("MONGO_URI not found in .env");
        }
        await mongoose_1.default.connect(mongoUri);
        console.log("✅ Connected to MongoDB");
        server = app_1.default.listen(port, () => {
            console.log(`🚀 Server running on http://localhost:${port}`);
        });
    }
    catch (err) {
        console.error("❌ Server failed to start:", err);
    }
};
startServer();
