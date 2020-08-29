module.exports = (req, res) => {
  const admin = require("firebase-admin");
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(
          Buffer.from(process.env.GCLOUD_CREDENTIALS, "base64").toString()
        )
      ),
    });
  }
  let db = admin.firestore();
  db.collection("table")
    .doc(req.body.tableName)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        res.status(401).send();
      } else {
        const table = doc.data();
        if (table.password == req.body.password) res.status(200).send();
        else res.status(401).send();
      }
    });
};
