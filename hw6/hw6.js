#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Define a structure to represent a Soccer Player
struct Player {
    int id;
    string name;
    string position;
    int age;
    string team;
};

// Function to display the details of a player
void displayPlayer(const Player& player) {
    cout << "ID: " << player.id << endl;
    cout << "Name: " << player.name << endl;
    cout << "Position: " << player.position << endl;
    cout << "Age: " << player.age << endl;
    cout << "Team: " << player.team << endl;
    cout << "-------------------------" << endl;
}

// Function to display all players
void displayAllPlayers(const vector<Player>& players) {
    for (const Player& player : players) {
        displayPlayer(player);
    }
}

// Function to add a new player
void addPlayer(vector<Player>& players, int id, const string& name, const string& position, int age, const string& team) {
    players.push_back({id, name, position, age, team});
    cout << "Player added successfully!\n";
}

// Function to update a player's team
void updatePlayerTeam(vector<Player>& players, int id, const string& newTeam) {
    for (Player& player : players) {
        if (player.id == id) {
            player.team = newTeam;
            cout << "Player's team updated successfully!\n";
            return;
        }
    }
    cout << "Player not found!\n";
}

// Function to delete a player
void deletePlayer(vector<Player>& players, int id) {
    for (auto it = players.begin(); it != players.end(); ++it) {
        if (it->id == id) {
            players.erase(it);
            cout << "Player deleted successfully!\n";
            return;
        }
    }
    cout << "Player not found!\n";
}

int main() {
    vector<Player> players = {
        {1, "Lionel Messi", "Forward", 36, "Inter Miami"},
        {2, "Cristiano Ronaldo", "Forward", 38, "Al-Nassr"},
        {3, "Kylian Mbappe", "Forward", 25, "PSG"},
        {4, "Robert Lewandowski", "Striker", 35, "Barcelona"},
        {5, "Kevin De Bruyne", "Midfielder", 32, "Manchester City"},
        {6, "Mohamed Salah", "Forward", 31, "Liverpool"},
        {7, "Neymar Jr.", "Forward", 31, "Al-Hilal"},
        {8, "Virgil van Dijk", "Defender", 32, "Liverpool"},
        {9, "Luka Modric", "Midfielder", 38, "Real Madrid"},
        {10, "Erling Haaland", "Striker", 24, "Manchester City"},
        {11, "Sadio Mane", "Forward", 31, "Bayern Munich"},
        {12, "Gianluigi Donnarumma", "Goalkeeper", 25, "PSG"},
        {13, "Sergio Ramos", "Defender", 37, "Sevilla"},
        {14, "Paul Pogba", "Midfielder", 31, "Juventus"},
        {15, "Karim Benzema", "Striker", 36, "Al-Ittihad"}
    };

    int choice, id, age;
    string name, position, team, newTeam;

    do {
        cout << "\n1. Display All Players\n2. Add New Player\n3. Update Player's Team\n4. Delete Player\n5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                displayAllPlayers(players);
                break;
            case 2:
                cout << "Enter Player ID: ";
                cin >> id;
                cout << "Enter Player Name: ";
                cin.ignore();
                getline(cin, name);
                cout << "Enter Player Position: ";
                getline(cin, position);
                cout << "Enter Player Age: ";
                cin >> age;
                cout << "Enter Player Team: ";
                cin.ignore();
                getline(cin, team);
                addPlayer(players, id, name, position, age, team);
                break;
            case 3:
                cout << "Enter Player ID to update: ";
                cin >> id;
                cout << "Enter new team: ";
                cin.ignore();
                getline(cin, newTeam);
                updatePlayerTeam(players, id, newTeam);
                break;
            case 4:
                cout << "Enter Player ID to delete: ";
                cin >> id;
                deletePlayer(players, id);
                break;
            case 5:
                cout << "Exiting program...\n";
                break;
            default:
                cout << "Invalid choice! Please try again.\n";
        }

    } while (choice != 5);

    return 0;
}
