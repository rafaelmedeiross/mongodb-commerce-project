db.produtos.find({ 
    $expr: { 
        $gt: [{ 
            $cmp: ["$curtidas", "$vendidos"], 
        }, 0] } }, { _id: 0, nome: 1 });