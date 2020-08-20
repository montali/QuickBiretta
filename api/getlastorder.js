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
  let dbRef = db.collection("order");
  var key = dbRef.doc().id;
  if (req.query.delivered) dbRef = dbRef.where("delivered", "==", true);
  if (req.query.missing) dbRef = dbRef.where("delivered", "==", false);

  let query = dbRef
    .orderBy("datetime", "asc")
    .limitToLast(1)
    .get()
    .then((snapshot) => {
      let response = [];
      if (snapshot.empty) {
        let queryRetry = dbRef
          .get()
          .then((snapshot) => {
            if (snapshot.empty) {
              res.status(404).send();
              return;
            }
            snapshot.forEach((doc) => {
              res.status(200).json(doc.data());
              return;
            });
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      }
      snapshot.forEach((doc) => {
        response.push(doc.data());
      });
      res.status(200).json(response);
      return;
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
