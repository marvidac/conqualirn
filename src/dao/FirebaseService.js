import { firebaseDatabase } from './util';

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath)
            .limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static getDataListByFilter = (nodePath, filter, callback, size = 10) => {
        //citiesRef.where('country', 'in', ['USA', 'Japan']);
        let query = firebaseDatabase.ref(nodePath)
            .limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static pushData = (node, objToSubmit) => {
        
        if (objToSubmit.key) {
            const id = objToSubmit.key;
            item = firebaseDatabase.ref(`${node}/${objToSubmit.key}`);
            const fields = Reflect.ownKeys(objToSubmit);
            for (let i = 0; i <= fields.length - 1; i++) {
                item.child(`${fields[i]}`).set(Reflect.get(objToSubmit, fields[i]));    
            }

            return id;
        } else {
            const ref = firebaseDatabase.ref(node).push();
            const id = firebaseDatabase.ref(node).push().key;
            ref.set(objToSubmit);
            return id;
        }
        
    };

    static remove = (node, id) => {
        return firebaseDatabase.ref(node + '/' + id).remove();
    };
}