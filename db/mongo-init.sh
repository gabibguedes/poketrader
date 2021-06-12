#!/bin/bash
set -e;

if [ -n "${DB_USER:-}" ] && [ -n "${DB_PASS:-}" ]; then
  echo "================== CREATE MONGO USERS =================="
	"${mongo[@]}" "$DB_NAME" <<-EOJS
		db.createUser({
			user: $(_js_escape "$DB_USER"),
			pwd: $(_js_escape "$DB_PASS"),
			roles: [ { role: 'readWrite' , db: $(_js_escape "$DB_NAME") } ]
			})
	EOJS
else
  echo "=============== MONGO INIT SCRIPT FAILED ==============="
fi