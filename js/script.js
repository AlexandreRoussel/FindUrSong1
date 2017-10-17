// $api_key = 'keyHB9YheEhsUXTkY';
// $base = 'tblYvctTXVEt4hfzF/viw26e0XZwfKLIl6n';
// $table = 'musics';
// $airtable_url = 'https://api.airtable.com/v0/' . $base . '/' . $table;
// $url = 'https://api.airtable.com/v0/' . $base . '/' . $table . '?maxRecords=10&view=Main%20View';
// $headers = array(
//     'Authorization: Bearer ' . $api_key
// );
// $ch = curl_init();
// curl_setopt($ch, CURLOPT_HTTPGET, 1);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($ch, CURLOPT_TIMEOUT, 10);
// curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
// curl_setopt($ch, CURLOPT_URL, $url);
// $entries = curl_exec($ch);
// curl_close($ch);
// $airtable_response = json_decode($entries, TRUE);

 var jsonSource = "https://api.airtable.com/v0/appTcNfokoNiW3RHR/musics?api_key=keyHB9YheEhsUXTkY";
console.log(jsonSource);

