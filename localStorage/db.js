
/** 新增数据到数据库
	 * @param  {[db]} 数据库
	 * @param  {[object]} 表对象 有两个属性 name属性表示表名 attr是一个数组属性表示字段 
	 * @param  {[array]} 对应字段的值
	 * @return {[]}
	 */
	function dbInsert( db, table, data) {

		var placeholder = [];
		var field = [];
		for (var i = 0, len = table.attr.length; i < len; i++) {
			placeholder.push("?");
			field.push(table.attr[i].substring(0, table.attr[i].indexOf(" ")) || table.attr[i]);
		}
		var createTableSQL = "CREATE TABLE IF NOT EXISTS " + table.name + " ("+ table.attr.join(",") +")";
		var insertSQL = "INSERT INTO " + table.name + " ("+ field.join(",") +") VALUES ("+ placeholder.join(",") +")";
		console.log(insertSQL);
		db.transaction(function (tx) {
            tx.executeSql(createTableSQL);
            tx.executeSql(insertSQL, data);
        });

	}

	/**查询
	 * @param  {[db]} 数据库 
	 * @param  {[string]} 表名
	 * @param  {[object]} 查询的条件 是一个对象
	 * @param  {Function} 回调函数
	 * @return {[type]}
	 */
	function dbQuery (db, tablename, opts, fn){
		var queryValue = []; 
		var queryAttr = []; 
		var querySQL = "SELECT * FROM LOGS";
		if(opts && opts.constructor === Object){
			for (var x in opts) {
				queryValue.push(opts[x]);
				queryAttr.push(x + " = ?");
			}
			querySQL += " WHERE " + queryAttr.join(" and ");
		}
		
		db.transaction(function (tx) {
            tx.executeSql(querySQL, queryValue, function (tx, results) {
            	if(fn){
            		fn.call(this, results);
            	}	
            }, null);
         });
	}

	/**更新数据
	 * @param  {[db]} 数据库
	 * @param  {[string]} 表名
	 * @param  {[object]} 更新的数据对象
	 * @param  {[object]} 查询条件
	 * @return {[type]}
	 */
	function dbUpdate (db, tablename, opts, conditions) {

		var setValue = []; 
		var conditionsAttr = []; 	
		var updateSQL = "UPDATE tan SET ";
		if(opts && opts.constructor === Object){
			for (var x in opts) {
				if(opts[x].constructor === String){
					opts[x] = "\""+ opts[x]  +"\"";
				}
				setValue.push(x + "=" + opts[x]);
			}
			updateSQL +=  setValue.join(",");
		}
		if(conditions && conditions.constructor === Object){
			for (var attr in conditions) {
				conditionsAttr.push(attr + "=" + conditions[attr]);
			}
			updateSQL += " WHERE " +  conditionsAttr.join(" and ");
		}
		console.log(updateSQL);
		db.transaction(function(tx) {
   			tx.executeSql(updateSQL);
		});
	}

	/**删除数据
	 * @param  {[type]}
	 * @param  {[type]}
	 * @param  {[type]}
	 * @return {[type]}
	 */
	function dbDelete (db, tablename, opts) {

        var deleteValue = []; 
        var deleteAttr = []; 
		var deleteSQL = "DELETE FROM " + tablename;
		if(opts && opts.constructor === Object){
			for (var x in opts) {
				deleteValue.push(opts[x]);
				deleteAttr.push(x + " = ?");
			}
			deleteSQL += " WHERE " + deleteAttr.join(" and ");
		}
		db.transaction(function (tx) {
              tx.executeSql(deleteSQL, deleteValue);
         });
	}