# Gabon HubTech API

L'infrastructure Backend robuste pour la communauté **Gabon HubTech**. Cette API gère la persistance des données, la communication avec la base de données MongoDB et l'automatisation des notifications par e-mail.

---

## Fonctionnalités

* **Architecture MVC** : Séparation stricte entre Modèles, Vues (Routes) et Contrôleurs.
* **Gestion des Contacts** : Réception et validation des formulaires de contact.
* **Persistance MongoDB** : Sauvegarde sécurisée des messages via Mongoose.
* **Notifications Mail** : Intégration avec l'API **Resend** pour des alertes instantanées.
* **Sécurité CORS** : Accès restreint uniquement au frontend autorisé (Netlify).

## Stack Technique

* **Runtime** : Node.js
* **Framework** : Express.js
* **Base de données** : MongoDB Atlas
* **Client Mail** : Resend
* **Hébergement** : Render

---

## Structure du Projet

```text
gabon-hubtech-api/
├── src/
│   ├── config/         # Connexion à la base de données
│   ├── controllers/    # Logique métier (traitement des requêtes)
│   ├── models/         # Schémas de données MongoDB
│   ├── routes/         # Définition des points d'entrée (Endpoints)
│   └── app.js          # Configuration Express & Middlewares
├── index.js            # Point d'entrée du serveur
└── .env                # Variables d'environnement (non inclus dans Git)
```

---

## Installation & Configuration

### 1. Cloner le dépôt
```bash
git clone [https://github.com/Benjamin09e/gabon-hubtech-api.git](https://github.com/Benjamin09e/gabon-hubtech-api.git)
cd gabon-hubtech-api
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
Crée un fichier `.env` à la racine et remplis les informations suivantes :

```env
PORT=5000
MONGO_URI=votre_lien_mongodb_atlas
RESEND_API_KEY=votre_cle_resend
RECEIVER_EMAIL=votre-email@gmail.com
FRONTEND_URL=[https://gabonhubtech.netlify.app](https://gabonhubtech.netlify.app)
```

### 4. Lancer le serveur
**Mode Développement (avec auto-reload) :**
```bash
npm run dev
```

**Mode Production :**
```bash
npm start
```

---

## API Endpoints

### Contact
| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/contact` | Enregistre un message et envoie un mail de notification. |

**Exemple de Payload JSON :**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Je souhaite rejoindre la communauté."
}
```

---

## Sécurité
Cette API utilise les meilleures pratiques de sécurité :
* **Variables d'environnement** : Masquage des clés secrètes.
* **CORS** : Seules les requêtes provenant de l'URL spécifiée dans `FRONTEND_URL` sont acceptées.
* **Validation** : Vérification de la présence des champs obligatoires avant traitement.

---

## Contribution
Le projet est ouvert aux contributions. Pour toute modification majeure, merci de créer une **Issue** au préalable pour discuter de ce que vous aimeriez changer.

**Gabon HubTech** - *Unir les talents pour le numérique au Gabon.*

