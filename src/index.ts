import 'dotenv/config';
import { expressAppSingleton } from "./app";

const PORT = process.env.PORT || 3000;

expressAppSingleton.app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});