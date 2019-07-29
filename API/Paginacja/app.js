na metodzie find  () {
 const per_page=  parseInt(req.query.per_page);
 const offset = parseInt(req.query.offset);
 const songsPrommise = Song.find().skip(offset).limit(per_page)
 const countPromise = Song.count()
 // warto wyslac ilosc elemntow jakie doszlyconst 
 const [songs, count] = await Promise.all([songsPrommise, countPromise])
 return res.status(200).send({data: songs, count})
 // sciezka powinna wyg;ldac np 
//  www.local.pl/api/songs/offset=2&per_page=3
} 