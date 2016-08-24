export const Columns = {
	datetime: require('./types/datetime/DatetimeColumn'),
	relationship: require('./types/relationship/RelationshipColumn'),
	name: require('./types/name/NameColumn'),
	email: require('./types/email/EmailColumn'),
	password: require('./types/password/PasswordColumn'),
	text: require('./types/text/TextColumn'),
	boolean: require('./types/boolean/BooleanColumn'),
	select: require('./types/select/SelectColumn'),
	cloudinaryimage: require('./types/cloudinaryimage/CloudinaryImageColumn'),
	cloudinaryimages: require('./types/cloudinaryimages/CloudinaryImagesColumn'),
	code: require('./types/code/CodeColumn'),
	color: require('./types/color/ColorColumn'),
	date: require('./types/date/DateColumn'),
	datearray: require('./types/datearray/DateArrayColumn'),
	file: require('./types/file/FileColumn'),
	geopoint: require('./types/geopoint/GeoPointColumn'),
	html: require('./types/html/HtmlColumn'),
	key: require('./types/key/KeyColumn'),
	location: require('./types/location/LocationColumn'),
	markdown: require('./types/markdown/MarkdownColumn'),
	money: require('./types/money/MoneyColumn'),
	number: require('./types/number/NumberColumn'),
	numberarray: require('./types/numberarray/NumberArrayColumn'),
	textarray: require('./types/textarray/TextArrayColumn'),
	textarea: require('./types/textarea/TextareaColumn'),
	url: require('./types/url/UrlColumn'),
	id: require('./components/columns/IdColumn'),
	__unrecognised__: require('./components/columns/InvalidColumn'),
};
export const Fields = {
	datetime: require('./types/datetime/DatetimeField'),
	relationship: require('./types/relationship/RelationshipField'),
	name: require('./types/name/NameField'),
	email: require('./types/email/EmailField'),
	password: require('./types/password/PasswordField'),
	text: require('./types/text/TextField'),
	boolean: require('./types/boolean/BooleanField'),
	select: require('./types/select/SelectField'),
	cloudinaryimage: require('./types/cloudinaryimage/CloudinaryImageField'),
	cloudinaryimages: require('./types/cloudinaryimages/CloudinaryImagesField'),
	// skip fields with external deps for now
	// code: require('./types/code/CodeField'),
	color: require('./types/color/ColorField'),
	date: require('./types/date/DateField'),
	datearray: require('./types/datearray/DateArrayField'),
	file: require('./types/file/FileField'),
	geopoint: require('./types/geopoint/GeoPointField'),
	// html: require('./types/html/HtmlField'),
	key: require('./types/key/KeyField'),
	location: require('./types/location/LocationField'),
	// markdown: require('./types/markdown/MarkdownField'),
	money: require('./types/money/MoneyField'),
	number: require('./types/number/NumberField'),
	numberarray: require('./types/numberarray/NumberArrayField'),
	textarray: require('./types/textarray/TextArrayField'),
	textarea: require('./types/textarea/TextareaField'),
	url: require('./types/url/UrlField'),
};
export const Filters = {
	datetime: require('./types/datetime/DatetimeFilter'),
	relationship: require('./types/relationship/RelationshipFilter'),
	name: require('./types/name/NameFilter'),
	email: require('./types/email/EmailFilter'),
	password: require('./types/password/PasswordFilter'),
	text: require('./types/text/TextFilter'),
	boolean: require('./types/boolean/BooleanFilter'),
	select: require('./types/select/SelectFilter'),
	cloudinaryimage: require('./types/cloudinaryimage/CloudinaryImageFilter'),
	cloudinaryimages: require('./types/cloudinaryimages/CloudinaryImagesFilter'),
	code: require('./types/code/CodeFilter'),
	color: require('./types/color/ColorFilter'),
	date: require('./types/date/DateFilter'),
	datearray: require('./types/datearray/DateArrayFilter'),
	file: require('./types/file/FileFilter'),
	geopoint: require('./types/geopoint/GeoPointFilter'),
	html: require('./types/html/HtmlFilter'),
	key: require('./types/key/KeyFilter'),
	location: require('./types/location/LocationFilter'),
	markdown: require('./types/markdown/MarkdownFilter'),
	money: require('./types/money/MoneyFilter'),
	number: require('./types/number/NumberFilter'),
	numberarray: require('./types/numberarray/NumberArrayFilter'),
	textarray: require('./types/textarray/TextArrayFilter'),
	textarea: require('./types/textarea/TextareaFilter'),
	url: require('./types/url/UrlFilter'),
};
