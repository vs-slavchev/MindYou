package utils;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;

import java.io.FileInputStream;
import java.io.IOException;

public class FirebaseInit {

    private static boolean initialised = false;

    private FirebaseInit() {
    }

    private static void initialise() {
        FileInputStream serviceAccount = null;
        FirebaseOptions options = null;
        try {
            serviceAccount = new FileInputStream("../../../../conf/mindyou-ab867-firebase-adminsdk-oit5f-56a228ae1c.json");
            options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();
        } catch (IOException e) {
            e.printStackTrace();
        }

        FirebaseApp.initializeApp(options);
        initialised = true;
    }

    public static String tokenToUserId(String token) {
        if (!initialised) {
            initialise();
        }

        FirebaseToken userToken = null;
        try {
            userToken = FirebaseAuth.getInstance().verifyIdToken(token);
        } catch (FirebaseAuthException e) {
            e.printStackTrace();
        }
        String uid = userToken.getUid();
        return uid;
    }

}
