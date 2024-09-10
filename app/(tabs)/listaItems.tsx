import { Button, Grid, IconButton, TextInput, TopBar } from "@/components";
import { useEffect, useState } from "react";
import { useSession } from "../ctx";
import { getDatabase, onValue, ref, set, remove } from "firebase/database"

export default function listaItemsScreen() {
    const { firebaseApp } = useSession();
    const [novoItem, setNovoItem] = useState("");
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState("")

    const database = getDatabase(firebaseApp);


    useEffect(() => {
        onValue(ref(database, "items/"), snapshot => {
            const loadedItems = []
            snapshot.forEach(childSnapshot => { loadedItems.push(childSnapshot.val()) });
            setItems(loadedItems);
        })
    }, [itemId]);

    function handleSubmit() {
        if (itemId) {
            set(ref(database, "items/" + itemId), { id: itemId, nome: novoItem })
            setItemId("");
        } else {
            const newItemId = crypto.randomUUID()
            set(ref(database, "items/" + newItemId), { id: newItemId, nome: novoItem })
            setItemId(newItemId);
        }
    }

    function handleEdit(valor) {
        if (!itemId) {
            setNovoItem(valor.nome);
            setItemId(valor.id);
        } else {
            setItemId("");
        }
    }

    function handleDelete(valor) {
        remove(ref(database, "items/" + valor.id));
        setItemId("")
    }

    return (
        <Grid style={{ display: "flex", width: "100%" }}>
            <TopBar title="Lista de Items" />
            <Grid>
                <TextInput style={{ margin: 16 }} value={novoItem} onChange={event => setNovoItem(event.target.value)} label="Item" />
                <Button onPress={handleSubmit}>Submeter</Button>
                {itemId ? <span>(Item selecionado.)</span> : <span>(Nenhum item selecionado.)</span>}
            </Grid>
            <Grid>
                <ul style={{ listStyle: "none" }}>
                    {items.map(value =>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <li key={value.id}>{value.nome}</li>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <IconButton icon="pencil" onPress={() => handleEdit(value)} />
                                <IconButton icon="trash-can" onPress={() => handleDelete(value)} />
                            </div>
                        </div>)}
                </ul>
            </Grid>
        </Grid>
    );
}

