



module.exports = function (db, unit_step, page_current, option) {

	if (typeof unit_step !== 'number' || unit_step < 1) {
		return reject('"unit_step"必须是一个大于等于1的数字');
	} else if (typeof page_current !== 'number' || page_current < 1) {
		return reject('"page_current"必须是一个大于等于1的数字');
	} else if (option && typeof option !== 'object') {
		return reject('"option"必须是一个对象');
	}
	
	const unit_count = db.length;
	const page_count = unit_count > 0 ? Math.ceil(unit_count / unit_step) : 1;

	const start = (page_current - 1) * unit_step;
	const end = start + unit_step;

	let list_data = db.slice(start, end);


	return { unit_step, unit_count, page_current, page_count, list_data };

}