#!/usr/bin/python3
import MySQLdb
import sys


if __name__ == "__main__":
    database = MySQLdb.connect(host="localhost", user=sys.argv[1],
                         passwd=sys.argv[2], database=sys.argv[3], port=3306)
    connection = database.cursor()
    connection.execute("SELECT * FROM states WHERE name LIKE BINARY '{}'"
                .format(sys.argv[4]))
    rows = connection.fetchall()
    for row in rows:
        print(row)
    connection.close()
    database.close()
